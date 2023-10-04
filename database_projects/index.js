const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const router  = require('./router/router');
require("dotenv").config()
const app = express();
app.use('/',router)
mongoose.connect(process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });

const db=mongoose.connection;

db.on('open',()=>{
    console.log('connected to database');
})


app.listen(8000,()=>{
    console.log('listening on 8000')
})