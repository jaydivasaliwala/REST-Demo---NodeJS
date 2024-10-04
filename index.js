const express = require('express');
const { responseModel } = require('./Model/ResponseModel');
const { userRoute } = require('./Routes/UserRoute');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",userRoute)

app.listen(2709,()=>{
    console.log("Server start...")
})