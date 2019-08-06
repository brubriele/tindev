const express = require('express');

const routes =  express.Router();

routes.get('/', (req, res) => {
    // return res.send(`Hello ${req.query.name}`);
    return res.json({ message: `Olá ${req.query.name}`});
});

module.exports = routes;