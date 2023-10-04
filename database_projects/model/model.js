const mongoose = require('mongoose');
require("dotenv").config()
const schema = mongoose.Schema({
    user_id:String,
    memberId:Number,
    ip:String,
    exchangeId:Number,
    timestamp:Number
})

const schema1=mongoose.Schema({
    applicationId:Number
})

const schema2=mongoose.Schema({
metricData:Object
})

const data =mongoose.model(process.env.COLL_NAME1,schema)
const application =mongoose.model(process.env.COLL_NAME2,schema1)
const metricData =mongoose.model(process.env.COLL_NAME3,schema2)


module.exports ={
    data,
    application,
    metricData
}
