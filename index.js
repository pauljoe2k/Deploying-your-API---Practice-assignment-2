// Load the dotenv package
require('dotenv').config();

// Import Express
const express = require('express');
const app = express();

// Route to return data based on the environment variable
app.get('/', (req, res) => {
    const isAdmin = process.env.IS_ADMIN === 'true';

    if (isAdmin) {
        res.send({
            message: "Welcome, Admin!",
            data: ["Admin Data 1", "Admin Data 2"],
        });
    } else {
        res.send({
            message: "Welcome, User!",
            data: ["User Data 1", "User Data 2"],
        });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:3000
`);
});
