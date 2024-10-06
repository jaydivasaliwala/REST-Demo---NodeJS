const {Router} = require('express')
const { GetAllUser, GetUser, DeleteUser, AddUser, UpdateUser } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getuser",GetAllUser)
userRoute.get("/getuser/:id",GetUser)
userRoute.delete("/deleteuser",DeleteUser)
userRoute.post("/adduser",AddUser)
userRoute.put("/updateuser",UpdateUser)

module.exports = {userRoute}