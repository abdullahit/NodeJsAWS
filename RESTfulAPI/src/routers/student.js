const express= require("express");
const router = new express.Router();
const Student=require("../models/students");



router.post("/students",async(req, res)=>{  //async function

    try {
        const user= new Student(req.body); //getting the data
        const creatUser = await user.save();  //after creation of data it will wait
        res.status(201).send(creatUser);

    }catch(e){
        res.status(400).send(e) } 
  });

// read the data of registerd students
router.get("/students",async (req, res)=>{
    try {
           const studentsData= await Student.find();
           res.send(studentsData);
        
    } catch (e) {
        res.send(e)  
    }

})

// get the individual student data using id
    router.get("/students/:id",async (req, res) => {
        try {
            const _id=req.params.id;
            const studentData= await Student.findById(_id);
            //if you want to print on console
            console.log(studentData)

            if(!studentData){
                return res.status(404).send();
            }
            else{
                res.send(studentData);
            }

        } catch (e) {
            res.status(500).send(e)
            
        }

    })


// update the students by it id

router.patch("/students/:id", async (req, res) => {

    try {
        const _id=req.params.id;
       const updateStudents = await Student.findByIdAndUpdate(_id, req.body,{
        new:true
       });
       res.send(updateStudents);
    } catch (e) {
        res.status(400).send(e);
    }

})



router.put("/students",async(req, res)=>{  //async function

    try {
        const user= new Student(req.body); //getting the data
        const creatUser = await user.save();  //after creation of data it will wait
        res.status(201).send(creatUser);

    }catch(e){
        res.status(400).send(e) } 
  });
    
//delet the Students by it id
router.delete("/students/:id", async (req, res) =>{
    try {
        
        const deletStudent=await Student.findByIdAndDelete(req.params.id)
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deletStudent);
        
    } catch (e) {
        res.status(500).send(e);
        
    }
})

// delete the Students by it name
router.delete("/students/:name", async(req, res)=>{
    try {
        const deletStudentName=await Student.findBYNameAndDelete(req.params.name)
        if(!req,params.name){
            return res.status(500).send()
        }
        res.send(deletStudentName);
        
    } catch (e) {
        res.status(600).send(e);
        
    }
})
module.exports=router; 