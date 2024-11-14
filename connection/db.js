const mongoose = require('mongoose')

const connection = process.env.Conncetion_String

mongoose.connect(connection).then((res)=>{
    console.log("Mongodb connection established ")
   
}).catch((err)=>{
    console.log("Mongodb connection error :" +err)
    
})