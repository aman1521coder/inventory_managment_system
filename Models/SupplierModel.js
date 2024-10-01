const mongoose = require('mongoose');

// Supplier Schema
const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    phone: String,
    email: String
  },
  company: String,
  itemsSupplied: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export Supplier model
module.exports = mongoose.model('Supplier', supplierSchema);
