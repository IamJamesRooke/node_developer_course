// This function, `promisify`, takes two arguments:
// 1. `item`: The value you want to resolve in the promise.
// 2. `delay`: The amount of time (in milliseconds) to wait before resolving the promise.
const promisify = (item, delay) =>
    // It returns a new Promise object.
    new Promise((resolve) =>
        // Inside the promise, it uses `setTimeout` to delay execution.
        setTimeout(() =>
            // After the specified delay, the `resolve` function is called with the `item`.
            resolve(item), delay));

const a = () => promisify('a', 100)
const b = () => promisify('b', 2500)
const c = () => promisify('c', 1500)

// Parallel
async function parallel() {
    const promises = [a(), b(), c()]
    const [output1, output2, output3] = await Promise.all (promises)
    return `Parallel Complete: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)

// Race with the .race method
async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `Race Winner: ${output1}`
}

race().then(console.log)


// Sequential
async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequence Complete: ${output1} ${output2} ${output3}`
}

sequence().then(console.log)