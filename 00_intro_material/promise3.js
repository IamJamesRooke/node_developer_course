// An array of URLs to fetch data from
const urls = [
    'https://jsonplaceholde.typicode.com/users', // (Note: Typo in the URL will cause an error)
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
];

// Use Promise.all to fetch data from all URLs simultaneously
Promise.all(
    urls.map(url => {
        // For each URL in the array, fetch the data
        return fetch(url) // Fetch returns a promise
            .then(response => response.json()); // Convert the response to JSON (also returns a promise)
    })
)
    .then(results => {
        // Once all promises resolve, the results array contains the JSON data from each URL
        console.log(results[0]); // Log the data from the first URL
        console.log(results[1]); // Log the data from the second URL
        console.log(results[2]); // Log the data from the third URL
    })
    .catch(() => {
        // If any of the promises fail (e.g., a network error or invalid URL), this block runs
        console.log('ERROR'); // Log an error message
    });