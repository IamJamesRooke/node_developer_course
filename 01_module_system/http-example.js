// Import the 'get' method from the 'https' module.
// The 'https' module is built into Node.js and is used to make HTTPS requests.
const { get } = require('node:https');

// Use the 'get' method to send an HTTPS GET request to 'https://www.google.com'.
// The first argument is the URL to which the request is sent.
// The second argument is a callback function that will be executed when a response is received.
const req = get('https://www.google.com', (res) => {
    // 'res' is the response object. It represents the data sent back by the server.

    // Attach an event listener to the 'data' event of the response object.
    // The 'data' event is triggered whenever a chunk of data is received from the server.
    res.on('data', (chunk) => {
        // Log the received chunk of data to the console.
        // 'chunk' is a Buffer object containing a portion of the response data.
        console.log(`Chunk: ${chunk}`);
    });

    // Attach an event listener to the 'end' event of the response object.
    // The 'end' event is triggered when all the data has been received and there is no more data to read.
    res.on('end', () => {
        // Log a message indicating that the response has ended.
        console.log('No more data.');
    });
});

// End the request.
// This is necessary to signal that no more data will be sent with the request.
// In this case, since it's a GET request, there is no request body, so we call 'end' immediately.
req.end();