const path = require('path');
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets.router')

const app = express();

// Middleware

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json()); // Parses incoming JSON requests
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/planets', planetsRouter); // Mounts the planets router at the '/planets' path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app;