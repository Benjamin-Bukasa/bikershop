const express = require('express');
const dotenv = require('dotenv');

const server = express();
const PORT = process.env.PORT || 3000;

// Middleware
server.use(express.json());

// Routes
server.get('/', (req, res) => {
    res.send('Welcome to the Bikershop API!');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});