const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello 1'), 100)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello 2'), 1000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello 3'), 2000)
})

// Waits until all promises are resolved, then 
// logs the values
Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values);
    })