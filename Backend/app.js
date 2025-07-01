require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const stockRoutes = require('./routes/stockRoutes');



const app = express();
const PORT = process.env.PORT || 5000; // Default port 5000

// Middleware to parse incoming JSON bodies
app.use(bodyParser.json());

// Enable CORS for specific origins (adjust as needed for your frontend domains)
app.use(cors({
  origin: [
    'http://localhost:5173', // Local dev
    'https://yourfrontend.com', // Replace with your frontend production URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    family: 4,        
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Set up API routes for different models

app.use('/api/stocks', stockRoutes);


// Root endpoint to check if the server is running
app.get('/', (req, res) => {
  res.send('Stock Management System backend is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
