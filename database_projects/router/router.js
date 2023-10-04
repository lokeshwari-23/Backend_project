const express = require('express');

const router = express.Router();
const controller=require('../controller/controller')
require("dotenv").config()
router.get('/data',controller.data);
router.get('/application',controller.application);
router.get('/metricdata',controller.metricData);
module.exports = router;