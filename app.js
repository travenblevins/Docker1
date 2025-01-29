'use strict';

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const app = express();

// Serve static files (including index.html) from the current directory
app.use(express.static(path.join(__dirname)));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, HOST, () => {
    console.log(`Express server listening on http://${HOST}:${PORT}`);
});
