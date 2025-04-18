const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets.router')

const app = express();

// Middleware

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json()); // Parses incoming JSON requests
app.use('/planets', planetsRouter); // Mounts the planets router at the '/planets' path

module.exports = app;