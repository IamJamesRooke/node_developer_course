setTimeout(() => {
    console.log('1', 'is the loneliest number');
})

setTimeout(() => {
    console.log('2', 'can be as bad as one')
}, 10)

Promise.resolve('hi').then((data) =>console.log('2', data))

console.log('3', 'is a crowd')