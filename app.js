const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./Routes/ItemRoutes');
const buyerRoutes = require('./Routes/BuyerRoutes');
const supplierRoutes = require('./Routes/SupplierRoutes');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use('/wwwroot', express.static(path.join(__dirname, 'wwwroot')));

// Use Routes
app.use('/api/items', itemRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/buyers', buyerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
