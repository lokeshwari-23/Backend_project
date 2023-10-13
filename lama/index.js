const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes=require('./router/router');
require("dotenv").config()
app.use('/',routes);






app.listen(8000,()=>{
    console.log('listening on 8000')
})