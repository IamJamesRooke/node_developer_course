// Express App
const express = require('express');
const app = express();
const PORT = 3000;

// Utilities
const path = require('path');

// Setting up Handle Bars (hbs) as view engine.
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

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

// Serving basic website
app.use('/site', express.static(path.join(__dirname, 'public')))

// JSON Middleware
app.use(express.json());

// Home Page
app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: "Lake",
        caption: "This is a lake."
    });
});

// Router Middleware
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);



// Listening on PORT
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})