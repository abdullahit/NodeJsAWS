    // establish connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/students-api").then(()=>{
    console.log("connection is  successfull");})
    .catch((e)=>{
        console.log("No connection ")
    
})


