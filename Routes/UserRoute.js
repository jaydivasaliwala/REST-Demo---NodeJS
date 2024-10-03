const {Router} = require('express')
const { GetUser } = require('../Controller/UserController')
const userRoute = Router()

userRoute.get("/getuser",GetUser)

module.exports = {userRoute}