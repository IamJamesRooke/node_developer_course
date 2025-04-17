const express = require('express');



// Controller Imports
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');



const app = express();
const PORT = 3000;


// Logging Middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

// Converts input to json
app.use(express.json());

// Home Page
app.get('/', (req, res) => {
    res.send('HOME PAGE');
});

// Adds new friend to array
app.post('/friends', friendsController.postFriend);

// Displays all friends
app.get('/friends', friendsController.getFriends);

// Displays one friend by id in url
app.get('/friends/:friendId', friendsController.getFriend);


app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessage)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})