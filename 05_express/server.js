// Express App
const express = require('express');
const app = express();
const PORT = 3000;

// Utilities
const path = require('path');

// Router Imports
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

// Logging Middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use('/site', express.static(path.join(__dirname, 'public')))

// JSON Middleware
app.use(express.json());

// Router Middleware
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

// Home Page
app.get('/', (req, res) => {
    res.send('HOME PAGE');
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})