const mongoose = require('mongoose');

// Buyer Schema
const buyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    phone: String,
    email: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  purchasedItems: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    quantity: Number,
    purchaseDate: {
      type: Date,
      default: Date.now
    }
  }],
  totalSpent: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export Buyer model
module.exports = mongoose.model('Buyer', buyerSchema);
