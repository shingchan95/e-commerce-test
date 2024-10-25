const express = require('express');
const router = express.Router();
const apiTestController = require('../controllers/apiTestController');

router.post('/', apiTestController.getApiTestData);

module.exports = router;