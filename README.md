# Lakshya Saraswat Portfolio

Premium full-stack portfolio with React/Vite frontend and Express/MongoDB/Nodemailer backend.

## Run locally

```bash
npm install --prefix frontend
npm install --prefix backend
npm run dev --prefix backend
npm run dev --prefix frontend
```

Frontend: http://localhost:5173
Backend health: http://localhost:5000/health

## Environment

Copy `backend/.env.example` to `backend/.env` and set MongoDB Atlas and Nodemailer credentials.
Copy `frontend/.env.example` to `frontend/.env` if your backend URL differs.

## Deployment

- Frontend: deploy `frontend` to Vercel.
- Backend: deploy `backend` to Render.
- Database: MongoDB Atlas connection string in `MONGO_URI`.
