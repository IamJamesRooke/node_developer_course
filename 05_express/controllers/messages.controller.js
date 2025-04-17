function getMessages(req, res) {
    res.send('Messages');
}

function postMessage(req, res) {
    console.log('Updating messages...')
}

module.exports = {
    getMessages, 
    postMessage
}