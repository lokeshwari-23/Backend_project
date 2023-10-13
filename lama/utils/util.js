const API_URL = process.env.API_URL
const { default: axios } = require('axios');
const { metricdatacollections,lama_metrics} = require('../model/model')

const generateURL = (path) => {
    return `${API_URL}/${path}`
}

const sendRequest = async (path) => {
    try {
        return await axios.post(generateURL(path),
            {
                "memberId":"06000",
                "loginId":"ApiUser06000",
                "password":"0CxUgThnqlK6gaKU2HnL2A=="
                }
        )
    } catch (err) {
        return { token:"asdrftyuioiuyzxrtyuimnnb" }
    }

}

const sendRequest1 = async (path) => {
    const response= await metricdatacollections.find({},{_id:0})
    console.log(response)
    try{
        return await axios.post(generateURL(path),response);//metric/database
    }catch(err){
        lama_metrics.create({lama:response,error:err.message})
        return ("data created successfully")
    }
}

    
module.exports = {
    generateURL,
    sendRequest,
    sendRequest1
}
