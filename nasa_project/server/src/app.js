const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api')

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

app.use(express.json()); // Parses incoming JSON requests
app.use(express.static(path.join(__dirname, '..', 'public'))); // Serves static files

app.use('/v1', api);

// Catch-All Route for React Frontend
// TODO: Get CATCH ALL WORKING
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;