const fs  = require('fs')

const UserGetAllData = () => {
    return JSON.parse(fs.readFileSync('Static/Data.json')).data
}

const UserGetData = (id) => {
    const tempData = JSON.parse(fs.readFileSync('Static/Data.json')).data
    return tempData.filter(d => d.id == id)
}

const UserDeleteData = (id) => {
    var tempData = JSON.parse(fs.readFileSync('Static/Data.json'))
    const data = tempData.data.filter(d => d.id != id).map(d => d)
    tempData.data = data
    fs.writeFileSync('Static/Data.json',JSON.stringify(tempData))
    return true
}

const UserAddData = (req_data) => {
    const data = JSON.parse(fs.readFileSync("Static/Data.json"))
    const id_list = data.data.map(d => d.id)
    const id = Math.max(...id_list)+1
    const add_data = {id:id,...req_data}
    data.data.push(add_data)
    fs.writeFileSync("Static/Data.json",JSON.stringify(data))
    return true
}

const UserUpdateData = (req_body) => {
    const data = JSON.parse(fs.readFileSync("Static/Data.json"))
    const index = data.data.findIndex(i => i.id === req_body.id)
    data.data[index] = req_body
    fs.writeFileSync("Static/Data.json",JSON.stringify(data))
    return true
}

module.exports = {UserGetAllData,UserGetData, UserDeleteData, UserAddData, UserUpdateData}