import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Role from './models/Role.js';

dotenv.config({ path: './.env' });

async function seed() {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI not found in environment');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const roleNames = ['Employee', 'Manager', 'Admin', 'SuperAdmin'];
    for (const name of roleNames) {
      if (!(await Role.findOne({ name }))) {
        await Role.create({ name, permissions: [] });
      }
    }

    const employeeRole = await Role.findOne({ name: 'Employee' });
    const managerRole = await Role.findOne({ name: 'Manager' });
    const adminRole = await Role.findOne({ name: 'Admin' });
    const superAdminRole = await Role.findOne({ name: 'SuperAdmin' });

    let managerUser = await User.findOne({ email: 'manager@vexio.local' });
    if (!managerUser) {
      managerUser = await User.create({
        username: 'ManagerOne',
        email: 'manager@vexio.local',
        password: 'password123',
        role: managerRole._id
      });
    } else {
      managerUser.password = 'password123';
      await managerUser.save();
    }

    let employeeUser = await User.findOne({ email: 'employee@vexio.local' });
    if (!employeeUser) {
      employeeUser = await User.create({
        username: 'EmployeeOne',
        email: 'employee@vexio.local',
        password: 'password123',
        role: employeeRole._id,
        manager: managerUser._id
      });
    } else {
      employeeUser.password = 'password123';
      employeeUser.manager = managerUser._id;
      await employeeUser.save();
    }

    let adminUser = await User.findOne({ email: 'admin@vexio.local' });
    if (!adminUser) {
      adminUser = await User.create({
        username: 'AdminOne',
        email: 'admin@vexio.local',
        password: 'password123',
        role: adminRole._id
      });
    } else {
      adminUser.password = 'password123';
      await adminUser.save();
    }

    let superAdminUser = await User.findOne({ email: 'superadmin@vexio.local' });
    if (!superAdminUser) {
      superAdminUser = await User.create({
        username: 'SuperAdminOne',
        email: 'superadmin@vexio.local',
        password: 'password123',
        role: superAdminRole._id
      });
    } else {
      superAdminUser.password = 'password123';
      await superAdminUser.save();
    }

    console.log('Seeded users successfully with VexioGate credentials');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();
