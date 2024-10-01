// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const ItemController = require('../Controllers/ItemController');

// Define routes for items
router.get('/', ItemController.getAllItems);           // Get all items
router.post('/', ItemController.createItem);           // Create a new item
router.get('/:id', ItemController.getItemById);        // Get an item by ID
router.put('/:id', ItemController.updateItem);         // Update an item
router.delete('/:id', ItemController.deleteItem);      // Delete an item

module.exports = router;
