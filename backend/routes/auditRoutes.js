import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import AuditLog from '../models/AuditLog.js';

const router = express.Router();

router.get('/', protect, admin, async (req, res) => {
  try {
    const logs = await AuditLog.find({})
      .populate('performedBy', 'username email')
      .populate('targetUser', 'username email')
      .sort({ createdAt: -1 })
      .limit(100);
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/notifications', protect, async (req, res) => {
  try {
    const logs = await AuditLog.find({})
      .sort({ createdAt: -1 })
      .limit(5);
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
