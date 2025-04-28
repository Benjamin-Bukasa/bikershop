const express = require('express');
const dotenv = require('dotenv').config;

const server = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
const userRoutes = require('./routes/user.js');
// const bikeRoutes = require('./routes/bike.js');
// const orderRoutes = require('./routes/order.js');
// const reviewRoutes = require('./routes/review.js');
// const authRoutes = require('./routes/auth.js');
// const cartRoutes = require('./routes/cart.js');
// const paymentRoutes = require('./routes/payment.js');
// const wishlistRoutes = require('./routes/wishlist.js');
// const categoryRoutes = require('./routes/category.js');
// const brandRoutes = require('./routes/brand.js');
// const addressRoutes = require('./routes/address.js');
// const adminRoutes = require('./routes/admin.js');
// const uploadRoutes = require('./routes/upload.js');



// Middleware
server.use(express.json());

// Routes
server.use('/bikershop/api/users', userRoutes);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});