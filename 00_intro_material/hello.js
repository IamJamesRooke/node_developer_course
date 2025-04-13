// when runnign node: (0) node (1) hello.js (2) {text}
const mission = process.argv[2];

if (mission === 'learn') {
    console.log('Time to write some Node Code!');
} else {
    console.log(`Is ${mission} really more fun?`);
}