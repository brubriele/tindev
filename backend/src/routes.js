const express = require('express');
const DevController = require('../src/controllers/DevController')

const routes =  express.Router();
routes.post('/devs', DevController.store)

module.exports = routes;