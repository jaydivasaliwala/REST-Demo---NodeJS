const { UserGetAllData, UserGetData, UserDeleteData } = require("../Business/UserData")
const { responseModel } = require("../Model/ResponseModel")

const GetAllUser = (req,res) => {
    const result = UserGetAllData();
    responseModel(res,200,"Record Get",false,result)
}

const GetUser = (req,res) => {
    const result = UserGetData(req.params.id)
    responseModel(res,200,"Record Get",false,result)
}

const DeleteUser = (req,res) => {
    UserDeleteData(req.query.id)
    responseModel(res,200,"Deleted",false,true)
}

module.exports = {GetAllUser,GetUser,DeleteUser}