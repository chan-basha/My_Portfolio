// File: server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contact.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://chanbasha-portfolio.vercel.app'
}));
app.use(express.json());

app.use('/api/contact', contactRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
