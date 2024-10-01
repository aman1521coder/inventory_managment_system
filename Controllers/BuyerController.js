// controllers/BuyerController.js
const Buyer = require('../Models/BuyerModel');

// Get all buyers
exports.getAllBuyers = async (req, res) => {
  try {
    const buyers = await Buyer.find();
    res.status(200).json(buyers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new buyer
exports.createBuyer = async (req, res) => {
  const buyer = new Buyer(req.body);
  try {
    const savedBuyer = await buyer.save();
    res.status(201).json(savedBuyer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a buyer by ID
exports.getBuyerById = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.params.id);
    if (!buyer) return res.status(404).json({ message: 'Buyer not found' });
    res.status(200).json(buyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateBuyer = async (req, res) => {
  try {
    const updatedBuyer = await Buyer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBuyer) return res.status(404).json({ message: 'Buyer not found' });
    res.status(200).json(updatedBuyer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a buyer
exports.deleteBuyer = async (req, res) => {
  try {
    const deletedBuyer = await Buyer.findByIdAndDelete(req.params.id);
    if (!deletedBuyer) return res.status(404).json({ message: 'Buyer not found' });
    res.status(200).json({ message: 'Buyer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
