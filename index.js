require('dotenv').config()
const express = require('express')
const cors = require('cors')

require('./connection/db')

const bookApp = express()
const router = require('./Router/router')
bookApp.use(cors())
bookApp.use(express.json())
bookApp.use(router)
const Port = 3000|| process.env

bookApp.listen(Port ,(req,res)=>{
    console.log(" server running on the port " +Port)
})
 bookApp.get('/' ,(req,res)=>{
    res.status(200).send("server running wait for client request ")
 })