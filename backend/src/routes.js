const express = require('express');
const DevController = require('../src/controllers/DevController');
const LikeController = require('../src/controllers/LikeController');
const DislikeController = require('../src/controllers/DislikeController');


const routes =  express.Router();
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);


module.exports = routes;