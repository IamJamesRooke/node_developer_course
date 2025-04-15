// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.
// States: 
//   - pending: The initial state, neither fulfilled nor rejected.
//   - fulfilled: The operation completed successfully.
//   - rejected: The operation failed.
// Methods: 
//   - .then(): Handles the success case.
//   - .catch(): Handles the failure case.
//   - .finally(): Executes code after the promise is settled, regardless of the outcome.

// Example 1: Using callbacks (the "callback pyramid of doom")
// This approach is difficult to read and maintain due to nested callbacks.
const movePlayer = (direction, distance, nextFunction) => {
    console.log(`${direction}: ${distance}`);
    if (nextFunction) nextFunction();
};

// Executing movements with nested callbacks
movePlayer('left', 200, () => {
    movePlayer('right', 10, () => {
        movePlayer('up', 500, () => {
            movePlayer('down', 20);
        });
    });
});

// Example 2: Using Promises (cleaner and easier to read)
// Promises allow us to chain operations in a more readable way.
const movePlayer2 = (direction, distance) => {
    return new Promise((resolve) => {
        console.log(`${direction}: ${distance}`);
        resolve(); // Resolve the promise after the action is complete
    });
};

// Chaining movements with Promises
movePlayer2('left', 200)
    .then(() => movePlayer2('right', 10))
    .then(() => movePlayer2('up', 500))
    .then(() => movePlayer2('down', 20));

// Output for both examples:
// left: 200
// right: 10
// up: 500
// down: 20