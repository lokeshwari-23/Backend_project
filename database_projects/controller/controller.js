const axios = require('axios');
const { data, application, metricData } = require('../model/model')
const utils = require('../utils/utils')

exports.data = async (req, res) => {
    let response = await utils.sendRequest('database')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    res.send(response.data.data)
    let value = await data.find({ exchangeId: response.data.data.exchangeId })
    if (value.length === 0) {
        data.create({
            user_id: response.data.data.user_id, memberId: response.data.data.memberId, ip: response.data.data.ip,
            exchangeId: response.data.data.exchangeId, timestamp: response.data.data.timestamp
        })
    }
    console.log('data1 created successfully')

}
exports.application = async (req, res) => {
    let response = await utils.sendRequest('database')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for (let i = 0; i < response.data.data.payload.length; i++) {
        console.log(response.data.data.payload[i].applicationId)
        let value = await application.find({ applicationId: response.data.data.payload[i].applicationId })
        if (value.length === 0) {
            application.create({ applicationId: response.data.data.payload[i].applicationId })
        }
    }
    console.log('application created successfully')
    res.send(response.data.data)
}
exports.metricData = async (req, res) => {
    let response = await utils.sendRequest('database')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for (let i = 0; i < response.data.data.payload.length; i++) {
        for (let j = 0; j < response.data.data.payload[i].metricData.length; j++) {
            metricData.create({ metricData: response.data.data.payload[i].metricData[j] })
        }
        res.send("success")
    }
    console.log("metric data inserted")
}

