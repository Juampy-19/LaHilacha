const express = require('express');
const router = express.Router();
const productApiController = require('../../controllers/api/productApiController');

//Listado de productos.
router.get('/', productApiController.productList);

module.exports = router;