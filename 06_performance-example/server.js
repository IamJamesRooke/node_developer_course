const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime < duration) {
        // Event loop is blocked.
    }
}

app.get('/', (req, res) => {
    res.send('Performance Example')
});

app.get('/timer', (req, res) => {
    // Event loop is blocked while this delay function is running.
    delay(3000);
    res.send('DING DING DING')
});

app.listen(3000, () => {
    console.log('http://localhost:3000')
});