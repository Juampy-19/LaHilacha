const express = require('express');
const router = express.Router();

const pizzasController = require('../controllers/pizzasController');

router.get('/pizzas', pizzasController.pizzas);

module.exports = router;