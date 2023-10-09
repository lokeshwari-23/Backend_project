const { cpuCollection, cpu_load,
    ram, throughput_data, io_operations_data,
    disk_average_wait_data, no_of_thread,
    lama_app_failureauth,
    lama_app_latency, lama_app_throughput,
    tcp_connection, up_time,
    hhd, interface, details } = require('../model/model')

require("dotenv").config()
const utils = require('../utils/utils')

exports.cpu = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = await cpuCollection.create(response.data.data.cpu)
    console.log('cpu created successfully')
    if (data) res.send(data)
}

exports.cpu_load = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = cpu_load.create(response.data.data.cpu_load)
    console.log('cpu_load created successfully')
    if (data) res.send(data)
}
exports.ram = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = ram.create(response.data.data)
    console.log('ram created')
    if (data) res.send(data)
}

exports.throughput_data = async (req, res) => {
    let response = await utils.sendRequest('details')
    res.send(response.data);
    console.log(response.data.data.disk_io_summary.throughput_data)
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = throughput_data.create(response.data.data.disk_io_summary)
    console.log('throughput_data created')
    if (data) res.send(data)
}

exports.io_operations_data = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = io_operations_data.create(response.data.data.disk_io_summary.io_operations_data)
    console.log('io_operations_datacreated')
    if (data) res.send(data)
}

exports.disk_average_wait_data = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = disk_average_wait_data.create(response.data.data.disk_io_summary.disk_average_wait_data)
    console.log('disk_average_wait_data created')
    if (data) res.send(data)
}

exports.no_of_thread = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = no_of_thread.create(response.data.data.no_of_thread)
    console.log('no_of_thread created')
    if (data) res.send(data)
}

exports.lama_app_failureauth = async (req, res) => {
    let response = await utils.sendRequest('details')
    res.send(response.data);
    console.log(response.data.data.lama_app_failureauth)
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = lama_app_failureauth.create(response.data.data.no_of_thread)
    console.log('lama_app_failureauth created')
    if (data) res.send(data)
}
exports.lama_app_latency = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = lama_app_latency.create(response.data.data.lama_app_latency)
    console.log('lama_app_failureauth created')
    if (data) res.send(data)
}

exports.lama_app_throughput = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = lama_app_throughput.create(response.data.data.lama_app_throughput)
    console.log('lama_app_failureauth created')
    if (data) res.send(data)
}
exports.tcp_connection = async (req, res) => {
    let response = await utils.sendRequest('details')
    res.send(response.data);
    console.log(response.data.data.tcp_connection)
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = tcp_connection.create(response.data.data.tcp_connection)
    console.log('tcp_connection created')
    if (data) res.send(data)
}
exports.up_time = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = up_time.create(response.data.data.up_time)
    console.log('up_time created')
    if (data) res.send(data)
}
exports.hhd = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = hhd.create(response.data.data.hhd)
    console.log('hdd created')
    if (data) res.send(data)
}
exports.interface = async (req, res) => {
    let response = await utils.sendRequest('details')
    res.send(response.data);
    console.log(response.data.data.interface)
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = interface.create(response.data.data.interface)
    console.log('interface created')
    if (data) res.send(data)
}
exports.details = async (req, res) => {
    let response = await utils.sendRequest('details')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let data = await details.create({
        livestateId: response.data.data.livestateId,
        host: response.data.data.host,
        ip: response.data.data.ip,
        userId: response.data.data.userId,
        ctime: response.data.data.ctime,
        createdAt: response.data.data.createdAt,
        updatedAt: response.data.data.updatedAt
    })
    if (data) res.send(data)
}