import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Attendance from '../models/Attendance.js';
import Leave from '../models/Leave.js';
import User from '../models/User.js';

const router = express.Router();

// Get personal stats (Employee/Manager) - support date ranges
router.get('/stats', protect, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const leaveQuery = { user: req.user._id };
    const attendanceQuery = { user: req.user._id };

    if (startDate && endDate) {
      attendanceQuery.date = { $gte: startDate, $lte: endDate };
      leaveQuery.$or = [
        { startDate: { $gte: startDate, $lte: endDate } },
        { endDate: { $gte: startDate, $lte: endDate } }
      ];
    } else {
      // Default to current month
      attendanceQuery.date = { $regex: new Date().toISOString().substring(0, 7) };
    }

    const leaves = await Leave.find(leaveQuery);
    const attendance = await Attendance.find(attendanceQuery).sort({ date: -1 });

    res.json({
      availableLeaves: 12 - leaves.filter(l => l.status === 'Approved').length,
      appliedLeaves: leaves.length,
      attendanceRecord: attendance,
      allLeaves: leaves
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update subordinate data (Manager/Admin Only)
router.put('/subordinate/:id', protect, async (req, res) => {
    try {
        const subordinateId = req.params.id;
        const userToUpdate = await User.findById(subordinateId);
        
        if (!userToUpdate) return res.status(404).json({ message: 'User not found' });

        // Security check: Is this user under the current manager or is current user Admin?
        if (userToUpdate.manager?.toString() !== req.user._id.toString() && req.user.role.name !== 'Admin' && req.user.role.name !== 'SuperAdmin') {
            return res.status(403).json({ message: 'Not authorized to update this member' });
        }

        const { username, email, status } = req.body;
        if (username) userToUpdate.username = username;
        if (email) userToUpdate.email = email;
        if (status) userToUpdate.status = status;

        await userToUpdate.save();
        res.json({ message: 'Subordinate profile updated successfully', user: userToUpdate });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get team data (Manager Only)
router.get('/team', protect, async (req, res) => {
  try {
    if (req.user.role.name !== 'Manager' && req.user.role.name !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const team = await User.find({ manager: req.user._id });
    const teamIds = team.map(u => u._id);
    
    const teamAttendance = await Attendance.find({ 
      user: { $in: teamIds },
      date: new Date().toISOString().substring(0, 10) // Today
    }).populate('user', 'username');

    const pendingLeaves = await Leave.find({
      user: { $in: teamIds },
      status: 'Pending'
    }).populate('user', 'username');

    res.json({
      teamMembers: team,
      todayAttendance: teamAttendance,
      pendingLeaves: pendingLeaves
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Apply for Leave
router.post('/leave', protect, async (req, res) => {
  try {
    const { startDate, endDate, reason } = req.body;
    const leave = new Leave({
      user: req.user._id,
      startDate,
      endDate,
      reason,
      status: 'Pending'
    });
    await leave.save();
    res.status(201).json({ message: 'Leave applied successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Clock In
router.post('/attendance/clock-in', protect, async (req, res) => {
  try {
    const date = new Date().toISOString().substring(0, 10);
    let attendance = await Attendance.findOne({ user: req.user._id, date });
    if (attendance) {
      return res.status(400).json({ message: 'Already clocked in for today' });
    }
    attendance = new Attendance({
      user: req.user._id,
      date,
      checkIn: new Date().toISOString().substring(11, 16)
    });
    await attendance.save();
    res.status(201).json({ message: 'Clocked in successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Clock Out
router.put('/attendance/clock-out', protect, async (req, res) => {
  try {
    const date = new Date().toISOString().substring(0, 10);
    const attendance = await Attendance.findOne({ user: req.user._id, date });
    if (!attendance) {
      return res.status(404).json({ message: 'No clock-in record found for today' });
    }
    attendance.checkOut = new Date().toISOString().substring(11, 16);
    await attendance.save();
    res.json({ message: 'Clocked out successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Approve/Reject Leave (Manager Only)
router.put('/leave/:id', protect, async (req, res) => {
  try {
    if (req.user.role.name !== 'Manager' && req.user.role.name !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    const { status } = req.body; // 'Approved' or 'Rejected'
    const leave = await Leave.findById(req.params.id);
    if (!leave) return res.status(404).json({ message: 'Leave not found' });
    
    leave.status = status;
    await leave.save();
    res.json({ message: `Leave ${status}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
