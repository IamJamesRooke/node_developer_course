const { 
    isMainThread, 
    Worker,
    workerData } = require('worker_threads');

if (isMainThread) {
    console.log(`Main Thread (process ${process.pid})`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 2, 3, 4]
    });
} else {
    console.log(`Worker (process ${process.pid})`);
    console.log(`${workerData} => ${workerData.sort()}`);
}
