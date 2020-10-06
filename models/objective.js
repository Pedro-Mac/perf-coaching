'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['task', 'milestone'],
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Task', schema);
