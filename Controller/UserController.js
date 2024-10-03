const { data } = require("../Business/UserGetData")
const { responseModel } = require("../Model/ResponseModel")

const GetUser = (req,res) => {
    const result = data
    responseModel(res,200,"Record Get",false,result)
}

module.exports = {GetUser}