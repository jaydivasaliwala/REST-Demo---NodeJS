const {Router} = require('express')
const { GetAllUser, GetUser, DeleteUser } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getuser",GetAllUser)
userRoute.get("/getuser/:id",GetUser)
userRoute.delete("/deleteuser",DeleteUser)

module.exports = {userRoute}