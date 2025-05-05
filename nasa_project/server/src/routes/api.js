const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router.js');

const api = express.Router()

api.use('/planets', planetsRouter); // Mounts the planets router at the '/planets' path
api.use('/launches', launchesRouter); // Mounts the launches router at the '/launches' path

module.exports = api;