/**
 * This script demonstrates the difference between `Promise.all` and `Promise.allSettled`.
 *
 * - `Promise.all`:
 *   - Takes an array of Promises and returns a single Promise.
 *   - Resolves when all input Promises resolve, returning an array of their resolved values.
 *   - Rejects immediately if any input Promise rejects, returning the reason for the first rejection.
 *   - In this example, `Promise.all` will reject because `promiseTwo` rejects.
 *
 * - `Promise.allSettled`:
 *   - Takes an array of Promises and returns a single Promise.
 *   - Resolves when all input Promises settle (either resolve or reject).
 *   - Returns an array of objects describing the outcome of each Promise (with `status` and `value` or `reason`).
 *   - Unlike `Promise.all`, it does not reject if any input Promise rejects.
 *   - In this example, `Promise.allSettled` will return an array with the results of both `promiseOne` and `promiseTwo`.
 */
const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 1000, 'tits'))

const promiseTwo = new Promise((resolve, reject) => 
    setTimeout(reject, 1000, 'ass'))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(e => console.log(`Error: ${e}`))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(e => console.log(`Error: ${e}`))