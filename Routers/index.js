const express =require ('express');

const route = express.Router();

const translateController = require('../Controlers/translate');

route.post('/translate', translateController.getTranslatedResponse);

module.exports = route;