'use strict';

const express = require('express');
const path = require('path'); // Built-in Node.js module for handling file paths

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`Express server listening on http://${HOST}:${PORT}`);
});

