import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import dns from 'node:dns';
import authRoutes from './routes/authRoutes.js';
import prayerRoutes from './routes/prayerRoutes.js';
import getmeRoutes from './routes/getmeRoutes.js';
import duaRoutes from './routes/duaRoutes.js'
import pictureRoutes from './routes/pictureRoutes.js'

const app = express();

dns.setServers([
    '1.1.1.1','8.8.8.8'
]);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile',getmeRoutes);
app.use('/api/prayer', prayerRoutes);
app.use('/api/getdua', duaRoutes);
app.use('/api/user',pictureRoutes);
app.get("/", (req, res) => {
  res.json({
    message : 'running perfectly'
  });
});


export default app;