// Global variables are bad because if we forget to clean them
// we can have memory leaks.

const a = 1;
const b = 10;
const c = 100;

// Call stack
// FAST 1 and FAST 3 executed first because they are synchronous.
// setTimeout is sent to the Web API, and the callback is registered to run after 2000ms.
// Once the timer completes, SLOW 2 is sent to the callback queue.
// The event loop checks if the call stack is empty. If so, it moves SLOW 2 from the callback queue to the call stack for execution.
console.log('FAST 1');
setTimeout(() => { console.log('SLOW 2'); }, 2000);
console.log('FAST 3');






// const one = () => {
//     const two = () => {
//         console.log('4');
//     }
//     two();
// }

// one();


// console.log('4')
// two()
// one()
// CALL STACK

// JavaScript is one-threaded, meaning there is only one call stack.
// This means there is only one thing worry about.

// How do craete a stack overflow
// with recursion
// function foo() {
//     foo();
// }

