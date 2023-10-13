const mongoose = require('mongoose');
require("dotenv").config()
const db1 = mongoose.createConnection(process.env.DB_NAME1, { useNewUrlParser: true, useUnifiedTopology: true });
const db2 = mongoose.createConnection(process.env.DB_NAME2, { useNewUrlParser: true, useUnifiedTopology: true });

const schema1=mongoose.Schema({
    metricData:Object
})
const schema2=mongoose.Schema({
    lama:Array,
    error:String
});

const metricdatacollections=db1.model(process.env.COLL_NAME1,schema1)
const lama_metrics=db2.model(process.env.COLL_NAME2,schema2)

module.exports= {metricdatacollections,lama_metrics} 