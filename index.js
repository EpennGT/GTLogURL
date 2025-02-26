const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Endpoint untuk growtopia/server_data.php
app.get('/growtopia/server_data.php', (req, res) => {
    res.sendFile(path.join(__dirname, 'growtopia', 'server_data.php'));
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
