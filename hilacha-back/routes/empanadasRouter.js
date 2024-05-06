const express = require('express');
const router = express.Router();

const empanadasController = require('../controllers/empanadasController');

router.get('/empanadas', empanadasController.empanadas);

module.exports = router;