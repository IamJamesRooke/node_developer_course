const path = require('path');

function getMessages(req, res) {
    // res.send('Messages');
    res.render('messages', {
        title: "Messages to friends.",
        friend: "Elon Musk"
    })
}

function postMessage(req, res) {
    console.log('Updating messages...')
}

module.exports = {
    getMessages, 
    postMessage
}