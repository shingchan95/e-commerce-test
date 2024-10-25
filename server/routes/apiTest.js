const express = require('express');
const router = express.Router();
const apiTestController = require('../controllers/apiTestController');

router.get('/', apiTestController.getApiTestData);

module.exports = router;