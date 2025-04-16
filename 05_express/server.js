const express = require('express');
const app = express();
const PORT = 3000;
const friends = [
    {
        id: 0,
        name: "Friend 0"
    },
    {
        id: 1,
        name: "Friend 1"
    },
    {
        id: 2,
        name: "Friend 2"
    },
    {
        id: 3,
        name: "Friend 3"
    },
];

app.get('/', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
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