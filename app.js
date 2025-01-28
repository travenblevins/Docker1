'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT1 = 3000; // First service port
const PORT2 = 3005; // Second service port
const HOST = '0.0.0.0'; // Listening on all interfaces

// App
const app = express();

// Serve the index.html file for the first service
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the app on port 3000 (service 1)
app.listen(PORT1, HOST, () => {
    console.log(`Express server for Service 1 listening on http://${HOST}:${PORT1}`);
});

// Start the app on port 3001 (service 2)
app.listen(PORT2, HOST, () => {
    console.log(`Express server for Service 2 listening on http://${HOST}:${PORT2}`);
});
