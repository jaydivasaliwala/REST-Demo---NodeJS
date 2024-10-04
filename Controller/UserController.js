const { data, UserGetData } = require("../Business/UserGetData")
const { responseModel } = require("../Model/ResponseModel")

const GetAllUser = (req,res) => {
    const result = data
    responseModel(res,200,"Record Get",false,result)
}

const GetUser = (req,res) => {
    const result = UserGetData(req.params.id)
    responseModel(res,200,"Record Get",false,result)
}

module.exports = {GetAllUser,GetUser}