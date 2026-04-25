import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import User from '../models/User.js';
import Role from '../models/Role.js';
import AuditLog from '../models/AuditLog.js';
import { provisionInSecondarySystem } from '../services/mockExternalService.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  try {
    const users = await User.find({}).populate('role', 'name').select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/profile', protect, async (req, res) => {
  const user = await User.findById(req.user._id).populate('role');
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.put('/profile', protect, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    
    await AuditLog.create({
      action: 'PROFILE_UPDATED',
      performedBy: user._id,
      details: { email: updatedUser.email }
    });

    res.json({ message: 'Profile updated successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.put('/:id', protect, admin, async (req, res) => {
  const { username, email, roleName, status } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const role = await Role.findOne({ name: roleName });
    if (role) user.role = role._id;
    
    user.username = username || user.username;
    user.email = email || user.email;
    user.status = status || user.status;

    await user.save();
    
    await AuditLog.create({
      action: 'USER_MODIFIED',
      targetUser: user._id,
      performedBy: req.user._id,
      details: { email: user.email, newRole: roleName }
    });

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', protect, admin, async (req, res) => {
  const { username, email, password, roleName, managerId } = req.body;
  try {
    const role = await Role.findOne({ name: roleName });
    if (!role) return res.status(400).json({ message: 'Role not found' });

    const user = new User({
      username, email, password, role: role._id, manager: managerId || null
    });
    
    try {
      const extRes = await provisionInSecondarySystem(user);
      if (extRes.success) {
        user.externalProvisioned = true;
      }
    } catch (e) {
      console.warn('External provisioning failed', e);
    }

    const savedUser = await user.save();

    await AuditLog.create({
      action: 'USER_CREATED',
      targetUser: savedUser._id,
      performedBy: req.user._id,
      details: { email: savedUser.email, role: role.name }
    });

    res.status(201).json({ message: 'User created successfully', user: { _id: savedUser._id, email: savedUser.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await User.findByIdAndDelete(req.params.id);

    await AuditLog.create({
      action: 'USER_DELETED',
      targetUser: user._id,
      performedBy: req.user._id,
      details: { email: user.email }
    });

    res.json({ message: 'User removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
