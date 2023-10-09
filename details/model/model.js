const mongoose = require('mongoose');
require("dotenv").config()

const schema1=mongoose.Schema({
    details:String,
    percent_used:String
})

const schema2=mongoose.Schema({
time:String,
time_str:String,
total1:String,
total5: String,
total: String,
warn: String,
crit:String,
cpuArr: String,
})

const schema3=mongoose.Schema({
details:String,
percent_used:Number,
used:Number,
used_unit:String,
total: Number,
total_unit:String
});
const schema4=mongoose.Schema({
    time:String,
    time_str:String,
    read_data:String,
    write_data:String
})
const schema5=mongoose.Schema({
    time:String,
    time_str:String,
    read_data:String,
    write_data:String
})

const schema6=mongoose.Schema({
    time:String,
    time_str:String,
    read_data:String,
    write_data:String
})

const schema7=mongoose.Schema({
    time: String,
    time_str: String,
    thread_data:String
})
const schema8=mongoose.Schema({
    time:String,
    time_str:String,
    timekey:Number,
    count: Number
})
const schema9=mongoose.Schema({
    time:String,
    time_str:String,
    timekey:  Number,
    max: Number,
    min: Number,
    avg: Number,
    med: Number
});
const schema10=mongoose.Schema({
    time:String,
    time_str:String,
    timekey:  Number,
    max: Number,
    min: Number,
    avg: Number,
    med: Number
})
const schema11=mongoose.Schema({
time: String,
time_str:String,
established: String,
time_wait:String,
listen: String,
})

const schema12=mongoose.Schema({
last_time:String,
details:String
})  
const schema13=mongoose.Schema({
    _id:String,
    path:String,
    details: String,
    percent_used:Number,
    used: Number,
    total: Number,
    used_unit: String,
    total_unit: String
})

const schema14=mongoose.Schema({
    in_bandwidth: String,
    out_bandwidth: String,
    inunicast: String,
    outunicast: String,
    inMulticast: String,
    outMulticast:String,
    inErr:String,
    outErr: String,
    _id: String,
    interfaceName:String,
    time: String,
    time_str:String
})
const schema15=mongoose.Schema({
    livestateId: String,
    host: String,
    ip: String,
    userId: String,
    ctime: String,
    createdAt: String,
    updatedAt:String
})
const cpuCollection = mongoose.model(process.env.COLL_NAME1, schema1)
const cpu_load=mongoose.model(process.env.COLL_NAME2, schema2)
const ram=mongoose.model(process.env.COLL_NAME3, schema3)
const throughput_data=mongoose.model(process.env.COLL_NAME4, schema4)
const io_operations_data=mongoose.model(process.env.COLL_NAME5, schema5)
const disk_average_wait_data=mongoose.model(process.env.COLL_NAME6, schema6)
const no_of_thread=mongoose.model(process.env.COLL_NAME7, schema7)
const lama_app_failureauth=mongoose.model(process.env.COLL_NAME8, schema8)
const lama_app_latency=mongoose.model(process.env.COLL_NAME9, schema9)
const lama_app_throughput=mongoose.model(process.env.COLL_NAME10, schema10)
const tcp_connection=mongoose.model(process.env.COLL_NAME11, schema11)
const up_time=mongoose.model(process.env.COLL_NAME12, schema12)
const hhd=mongoose.model(process.env.COLL_NAME13,schema13)
const interface=mongoose.model(process.env.COLL_NAME14,schema14)
const details=mongoose.model(process.env.COLL_NAME15,schema15)

module.exports={cpuCollection,cpu_load,ram,throughput_data,
    io_operations_data,disk_average_wait_data,no_of_thread,
    lama_app_failureauth,lama_app_latency,lama_app_throughput,
    tcp_connection,up_time,hhd,interface,details}