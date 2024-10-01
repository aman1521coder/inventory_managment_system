// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const BuyerController = require('../Controllers/BuyerController');

// Define routes for items
router.get('/',BuyerController.getAllBuyers);           // Get all items
router.post('/',BuyerController.createBuyer);           // Create a new item
router.get('/:id',BuyerController.getBuyerById);        // Get an item by ID
router.put('/:id',BuyerController.updateBuyer);         // Update an item
router.delete('/:id',BuyerController.deleteBuyer);      // Delete an item

module.exports = router;
