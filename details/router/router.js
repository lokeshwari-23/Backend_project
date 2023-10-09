const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')
require("dotenv").config()

router.get('/cpu',controller.cpu);
router.get('/cpu_load',controller.cpu_load);
router.get('/ram',controller.ram);
router.get('/throughput_data',controller.throughput_data);
router.get('/io_operations_data',controller.io_operations_data)
router.get('/disk_average_wait_data',controller.disk_average_wait_data);
router.get('/no_of_thread',controller.no_of_thread);
router.get('/lama_app_failureauth',controller.lama_app_failureauth);
router.get('/lama_app_latency',controller.lama_app_latency);
router.get('/lama_app_throughput',controller.lama_app_throughput);
router.get('/tcp_connection',controller.tcp_connection);
router.get('/up_time',controller.up_time)
router.get('/hhd',controller.hhd)
router.get('/interface',controller.interface)
router.get('/details',controller.details)

module.exports =router;