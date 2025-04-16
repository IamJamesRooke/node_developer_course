const { parse } = require('csv-parse');
const fs = require('fs');
const { resourceLimits } = require('worker_threads');

const results = [];

fs.createReadStream('kepler_data.csv')
    .on('data', (data) => {
        results.push(data)
    })
    .on('error', (err) => {
        console.log(err)
    })
    .on('end', () => {
        console.log(results);
        console.log('done');
    })

console.log(parse)