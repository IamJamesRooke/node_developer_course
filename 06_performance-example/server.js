const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime < duration) {
        // Event loop is blocked.
    }
}

app.get('/', (req, res) => {
    res.send(`Performance Example: ${process.pid}`)
});

app.get('/timer', (req, res) => {
    // Event loop is blocked while this delay function is running.
    delay(2500);
    res.send(`DING DING DING (${process.pid})`)
});

console.log('Running server.js...')
console.log('Worker Process Started');
app.listen(3000, () => {console.log('http://localhost:3000')});
