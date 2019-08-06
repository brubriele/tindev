const express = require('express');
const DevController = require('../src/controllers/DevController');
const LikeController = require('../src/controllers/LikeController');

const routes =  express.Router();
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;