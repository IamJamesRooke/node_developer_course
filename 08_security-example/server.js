const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

app.get('/secret', (req, res) => {
    return res.send('Password: password');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
    console.log(`Secret found on http://localhost:${PORT}/secret`)
})