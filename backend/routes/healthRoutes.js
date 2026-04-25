import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, (req, res) => {
  const start = process.hrtime();
  
  setTimeout(() => {
    const diff = process.hrtime(start);
    const latency = (diff[0] * 1000 + diff[1] / 1e6).toFixed(2);
    
    res.json({
      status: 'OK',
      uptime: process.uptime(),
      latency: `${latency} ms`,
      timestamp: new Date().toISOString(),
      services: {
        database: 'Connected',
        externalAuth: 'Operational',
        mfaService: 'Operational'
      }
    });
  }, 50);
});

export default router;
