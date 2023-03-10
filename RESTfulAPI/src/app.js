
//const { Router } = require("express");
const express=require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter= require("./routers/student");

const app = express(); 
const port= process.env.PORT || 32000;

app.use(express.json()); // work as middleware
app.use(studentRouter);

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})
