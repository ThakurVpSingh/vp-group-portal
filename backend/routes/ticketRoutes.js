import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Ticket from '../models/Ticket.js';
import User from '../models/User.js';

const router = express.Router();

// Raise a Ticket
router.post('/', protect, async (req, res) => {
  try {
    const { title, description, type, priority } = req.body;
    
    // Auto-assign to manager based on hierarchy
    if (!req.user.manager && req.user.role.name !== 'SuperAdmin') {
      return res.status(400).json({ message: 'No manager assigned. Ticket cannot be routed.' });
    }

    const ticket = new Ticket({
      creator: req.user._id,
      recipient: req.user.manager,
      title,
      description,
      type,
      priority
    });

    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get tickets for current user (created or received)
router.get('/', protect, async (req, res) => {
  try {
    const createdTickets = await Ticket.find({ creator: req.user._id }).populate('recipient', 'username');
    const receivedTickets = await Ticket.find({ recipient: req.user._id }).populate('creator', 'username');
    
    res.json({ created: createdTickets, received: receivedTickets });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update ticket status (Recipient only)
router.put('/:id', protect, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    if (ticket.recipient.toString() !== req.user._id.toString() && req.user.role.name !== 'SuperAdmin') {
        return res.status(403).json({ message: 'Not authorized to resolve this ticket' });
    }

    const { status } = req.body;
    ticket.status = status;
    await ticket.save();
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
