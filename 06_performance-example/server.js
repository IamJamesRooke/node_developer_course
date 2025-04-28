const express = require('express');
const cluster = require('cluster');
const os = require('os');

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
if (cluster.isMaster) {
    console.log('Master Started')
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();
    }

} else {
    console.log('Worker Process Started');
    app.listen(3000, () => {console.log('http://localhost:3000')});

}
