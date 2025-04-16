const axios = require('axios');

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        const { cause } = error
        console.log(cause)
    })
    .then(() => {
        console.log('******PROCESS COMPLETE******')
    });