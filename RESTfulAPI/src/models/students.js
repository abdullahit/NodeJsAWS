// we are creating schema for inserting values for this we defines the data type 

const mongoose = require("mongoose");
const validator=require("validator");

//schema defined
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3

    },
        email:{
            type:String,
            required:true,
            unique:[true, "Email id already presesnt"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },

    address:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    // photo:{
    //     type:Buffer,
    //     required: true

    // }
})

// model defined here// we will create a new collection

const Student = new mongoose.model('Student',studentSchema);
module.exports=Student;