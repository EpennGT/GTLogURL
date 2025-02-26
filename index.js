const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
