// server.js

const express = require('express')
const server = express()
//挂载路由对象
const router = require('./router')
var bodyParser = require('body-parser');
server.use(bodyParser());
var cors = require('cors')
server.use(cors()) // Use this after the variable declaration
server.use(router)

server.listen(3000,()=>{
    console.log('Server is running on localhost:3000')
})
