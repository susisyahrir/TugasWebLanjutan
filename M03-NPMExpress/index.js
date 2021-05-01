const express = require('express')
const app = express()

const logger = require('morgan')

app.use(logger("dev"))

app.use(express.static(__dirname + "/publik"))

app.listen(3000,()=>{
    console.log("Server run")
})