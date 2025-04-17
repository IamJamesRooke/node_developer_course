const path = require('path');

function getMessages(req, res) {
    // res.send('Messages');
    const lakeImage = path.join(__dirname, '..', 'public', 'images', 'lake.jpg')
    res.sendFile(lakeImage)
}

function postMessage(req, res) {
    console.log('Updating messages...')
}

module.exports = {
    getMessages, 
    postMessage
}