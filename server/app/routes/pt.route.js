const express = require('express');
const router = express.Router();
const elements = require('../controller/pt.controller.js');

router.get('/', elements.findAll);

router.get('/isotopes', elements.isotopes);

module.exports = router;