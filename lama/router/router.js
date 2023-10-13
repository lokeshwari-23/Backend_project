const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')
require("dotenv").config()
router.get('/users',controller.users);
router.get('/metric_Data',controller.metric_Data);
module.exports =router;