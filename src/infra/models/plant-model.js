const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  family: {
    type: String,
  },
  origin: {
    type: String,
  },
  sunlight: {
    type: String,
    enum: ['Full Sun', 'Partial Sun', 'Shade'],
    required: true,
  },
  water: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true,
  },
  soil: {
    type: String,
    enum: ['Sandy', 'Loamy', 'Clay', 'Chalky', 'Peaty', 'Well-draining'],
    required: true,
  },
  description: {
    type: String,
  },
  careInstructions: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

plantSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
