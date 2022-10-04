const express = require('express');

const characters = require('./characters.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/characters', characters);
}

module.exports = routerApi;
