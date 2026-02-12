const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// M-Pesa API configuration
const consumerKey = 'YOUR_CONSUMER_KEY';
const consumerSecret = 'YOUR_CONSUMER_SECRET';
// Replace these with appropriate API endpoints and credentials

// Form handling route
app.post('/submit-form', (req, res) => {
    const { name, phoneNumber, amount } = req.body;
    // Process form data and initiate M-Pesa payment
    // You will need to implement actual M-Pesa API integration here
    res.json({ message: 'Form submitted successfully!', name, phoneNumber, amount });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
