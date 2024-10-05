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

module.exports = {UserGetAllData,UserGetData, UserDeleteData}