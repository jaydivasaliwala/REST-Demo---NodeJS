const {Router} = require('express')
const { GetAllUser, GetUser } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getuser",GetAllUser)
userRoute.get("/getuser/:id",GetUser)

module.exports = {userRoute}