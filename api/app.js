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
import aalimRoutes from './routes/aalimRoutes.js'
import { rateLimit } from 'express-rate-limit'

const app = express();

dns.setServers([
    '1.1.1.1','8.8.8.8'
]);


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 150, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter)


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile',getmeRoutes);
app.use('/api/prayer', prayerRoutes);
app.use('/api/getdua', duaRoutes);
app.use('/api/user',pictureRoutes);
app.use('/api/aalim',aalimRoutes);
app.get("/", (req, res) => {
  res.json({
    message : 'running perfectly'
  });
});


export default app;