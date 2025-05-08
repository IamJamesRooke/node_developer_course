// Imports
const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./services/mongo')
const { loadPlanetsData } = require('./models/planets.model')
const { loadLaunchesData } = require('./models/launches.model')

// Create the server
const server = http.createServer(app);

// Start the server
async function startServer() {

    await mongoConnect(); // Connect to MongoDB
    await loadPlanetsData(); // Send planet data to MongoDB
    await loadLaunchesData(); // Send launch data to MongoDB
    
    // Server listens for traffic directed to PORT
    server.listen(process.env.PORT || 8000, () => {console.log(`https://localhost:${PORT}`)})
}

startServer();