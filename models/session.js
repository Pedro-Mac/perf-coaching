'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Task', schema);
