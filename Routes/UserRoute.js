const {Router} = require('express')
const { GetAllUser, GetUser, DeleteUser, AddUser } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getuser",GetAllUser)
userRoute.get("/getuser/:id",GetUser)
userRoute.delete("/deleteuser",DeleteUser)
userRoute.post("/adduser",AddUser)

module.exports = {userRoute}