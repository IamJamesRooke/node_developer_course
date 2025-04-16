const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Testing');
});

app.get('/messages', (req, res) => {
    res.send('Messages');
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...')
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})