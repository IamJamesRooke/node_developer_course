const EventEmitter = require('events');

// Trump is an emitter
const Trump = new EventEmitter();

// Observer 1 loves Trump, reacting to election win
Trump.on('race', (result) => {
    if (result === 'win') {
        console.log('Make America Great Again!')
    } else {
        console.log('Fucking lefties');
    }
});

// Observer 2 is a dumb leftist.
Trump.on('race', (result) => {
    if (result === 'win') {
        console.log('No!!!!! I hate freedom!');
    } else {
        console.log('Yay. Evil triumphs again.');
    }
})

// For the runtime process itself, can do this on exiting
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code)
})

Trump.emit('race', 'win')