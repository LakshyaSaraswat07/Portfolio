export const notFound = (req, res, next) => {
  const error = new Error(`Not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  if (error.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: Object.values(error.errors).map((item) => item.message).join(', '),
    });
  }

  if (error.name === 'MongooseServerSelectionError') {
    return res.status(503).json({ success: false, message: 'Database connection unavailable.' });
  }

  return res.status(statusCode).json({
    success: false,
    message: error.message || 'Server error',
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });
};
