const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'ENCRYPTED DATA'
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}.`)
}

module.exports = {
    REQUEST_TIMEOUT,
    send,
}