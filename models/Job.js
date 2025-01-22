const mongoose = require('mongoose');

// Define schema for the Job model
const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide job title'],
      trim: true,
      maxlength: [50, 'Title cannot be more than 50 characters'],
    },
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      trim: true,
      maxlength: [50, 'Company name cannot be more than 50 characters'],
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);