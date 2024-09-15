const express = require('express');
const app = express();

const env = require('dotenv');

env.config();

const PORT = process.env.PORT || 3007;

app.post('/check', (req, res) => {
    res.json("Hello world");
});

// SERVER IS RUNNING
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
