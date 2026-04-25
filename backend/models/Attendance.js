import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  status: { type: String, enum: ['Present', 'Absent', 'On Leave'], default: 'Present' },
  checkIn: { type: String },
  checkOut: { type: String }
}, { timestamps: true });

export default mongoose.model('Attendance', attendanceSchema);
