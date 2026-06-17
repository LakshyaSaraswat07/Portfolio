import Contact from '../models/Contact.js';
import { sendContactEmail } from '../config/mailer.js';

export const createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const contact = await Contact.create({ name, email, subject, message });
    await sendContactEmail(contact);

    return res.status(201).json({
      success: true,
      message: 'Message received successfully.',
      data: { id: contact._id, createdAt: contact.createdAt },
    });
  } catch (error) {
    return next(error);
  }
};
