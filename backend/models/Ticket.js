import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['Discrepancy', 'Access Request', 'Technical'], default: 'Discrepancy' },
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved', 'Closed'], default: 'Open' },
  priority: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], default: 'Medium' }
}, { timestamps: true });

export default mongoose.model('Ticket', ticketSchema);
