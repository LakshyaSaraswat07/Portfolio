# Lakshya Saraswat Portfolio

A premium full-stack portfolio website for **Lakshya Saraswat**: Full Stack Developer, Electronics & Communication Engineer, and AI enthusiast from Kanpur, Uttar Pradesh, India.

Live site: https://lakshya-saraswat-portfolio-api.onrender.com

## Overview

This portfolio presents Lakshya's developer profile, technical skills, featured projects, certifications, achievements, GitHub presence, and a production-ready contact form. The project is built as a modern MERN-style full-stack application and deployed as a single Render web service.

## Highlights

- Dark premium glassmorphism UI
- Smooth Framer Motion animations
- Responsive mobile-first layout
- Animated typing effect
- Particle background
- Project showcase with custom images
- GitHub consistency and contribution section
- Contact form connected to backend API
- MongoDB message persistence
- Nodemailer email notification support
- SEO and Open Graph metadata
- Single-service Render deployment

## Tech Stack

### Frontend

- React
- Vite
- JavaScript ES6
- CSS3
- Framer Motion
- React Icons
- Axios

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nodemailer

### Deployment

- Render Web Service
- MongoDB Atlas

## Featured Projects

### AI Resume Analyzer & ATS Checker

AI-powered resume analysis project with ATS scoring, resume parsing, skill gap analysis, and suggestions.

Tech: Python, Flask, HTML, CSS, PyPDF2

### Browser-Based Code Editor

A browser code editor with live preview, real-time execution, file download, and theme switching.

Tech: HTML, CSS, JavaScript

### RF Transmission Drone

A hardware-based flying drone project focused on RF communication, stable flight control, and hardware integration.

Tech: RF Modules, Flight Controller, Embedded Systems

## Local Setup

Clone the repository:

```bash
git clone https://github.com/LakshyaSaraswat07/Portfolio.git
cd Portfolio
```

Install dependencies:

```bash
npm install --prefix frontend
npm install --prefix backend
```

Run locally:

```bash
npm run dev --prefix backend
npm run dev --prefix frontend
```

Frontend: http://127.0.0.1:5174  
Backend health: http://localhost:5000/health

## Environment Variables

Create `backend/.env` using `backend/.env.example`.

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_atlas_connection_string
FRONTEND_URL=http://localhost:5173,http://127.0.0.1:5174
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=lakshya3924@gmail.com
```

## Render Deployment

The project uses `render.yaml` for Blueprint deployment.

The deployed Render service is a single Node web service that:

- Builds the React frontend
- Serves the frontend from Express
- Exposes backend APIs under `/api`
- Provides health check at `/health`

Build command:

```bash
npm install --prefix frontend && npm run build --prefix frontend && npm install --prefix backend
```

Start command:

```bash
npm start --prefix backend
```

## Contact

Email: lakshya3924@gmail.com  
GitHub: https://github.com/LakshyaSaraswat07  
LinkedIn: https://linkedin.com/in/lakshya-saraswat

## License

This project is created for Lakshya Saraswat's personal portfolio.
