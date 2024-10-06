const { UserGetAllData, UserGetData, UserDeleteData, UserAddData } = require("../Business/UserData")
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

const AddUser = (req,res) => {
    const result = UserAddData(req.body)
    responseModel(res,200,"Added.",false,result)
}

module.exports = {GetAllUser,GetUser,DeleteUser, AddUser}