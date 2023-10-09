const express = require('express');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const routes= require('./router/router');
require("dotenv").config()
app.use('/',routes);

mongoose.connect(process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });

const db=mongoose.connection;

db.on('open', () => {
    console.log('Connected to database');
});













app.listen(8000,()=>{
    console.log('listening on 8000');
})