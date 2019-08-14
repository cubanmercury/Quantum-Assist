const express = require('express');
const router = express.Router();
const elements = require('../controller/pt.controller.js');

router.get('/', elements.findAll);

module.exports = router;