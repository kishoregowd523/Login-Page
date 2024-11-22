const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

const users = {
    user: 'password123' // Example username and password
};

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple authentication (replace with a real database in production)
    if (users[username] && users[username] === password) {
        res.json({ message: 'Login successful', success: true });
    } else {
        res.json({ message: 'Incorrect username or password', success: false });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
