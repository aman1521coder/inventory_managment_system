const mongoose = require('mongoose');

// Item Schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export Item model
module.exports = mongoose.model('Item', itemSchema);
