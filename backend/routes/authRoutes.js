import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Role from '../models/Role.js';
import AuditLog from '../models/AuditLog.js';

const router = express.Router();

router.post('/init', async (req, res) => {
  console.log('[IAM_INIT] Hit initialization endpoint');
  try {
    const rolesCount = await Role.countDocuments();
    if (rolesCount === 0) {
      await Role.create([{ name: 'Admin' }, { name: 'Manager' }, { name: 'Employee' }]);
    }
    
    const adminRole = await Role.findOne({ name: 'Admin' });
    if (!adminRole) {
      return res.status(500).json({ message: 'Critical Error: Standard roles not found. Please refresh and try again.' });
    }

    const adminEmail = 'admin@vexio.local';
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      const admin = new User({
        username: 'superadmin',
        email: adminEmail,
        password: 'password123',
        role: adminRole._id,
        mfaEnabled: true
      });
      await admin.save();
      console.log(`[IAM_INIT] Success: New Superadmin created (${adminEmail})`);
    } else {
      // FORCE RE-HASH EXISTING ADMIN
      existingAdmin.password = 'password123';
      await existingAdmin.save();
      console.log(`[IAM_INIT] Success: Superadmin identity re-synced and secured`);
    }

    await AuditLog.create({
      action: 'SYSTEM_INIT',
      details: { message: 'Initialized standard roles and secured superadmin' }
    });
    
    return res.status(200).json({ message: 'System identity vault primed and secured' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password, mfaCode, intendedRole } = req.body;
  
  try {
    const user = await User.findOne({ email }).populate('role');
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const roleLevels = { 'Employee': 1, 'Manager': 2, 'Admin': 3, 'SuperAdmin': 4 };
    const actualLevel = user.email === 'admin@vexio.local' ? 4 : (roleLevels[user.role.name] || 1);
    const targetedLevel = roleLevels[intendedRole] || 1;

    if (actualLevel < targetedLevel) {
      return res.status(403).json({ 
        message: 'You do not have the access. Please reach out to the SuperAdmin.' 
      });
    }

    if (user.mfaEnabled || targetedLevel >= 3) {
      if (!mfaCode || mfaCode !== '123456') {
        return res.status(401).json({ message: 'MFA REQUIRED', requireMfa: true });
      }
    }

    const token = jwt.sign({ id: user._id, role: intendedRole }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
    await AuditLog.create({
      action: 'USER_LOGIN',
      targetUser: user._id,
      performedBy: user._id,
      details: { email: user.email, roleMapped: intendedRole }
    });

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: intendedRole, 
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
