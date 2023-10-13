
const utils = require("../utils/util")
exports.users =async (req, res) => {
    let response = await utils.sendRequest('auth/login')
    res.send(response)
    console.log(response) 
}

exports.metric_Data =async (req, res) => {
    let response = await utils.sendRequest1('metrics/database')
    console.log("metric_data---->",response)
    res.send(response)
}
