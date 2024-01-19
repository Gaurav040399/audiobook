const express = require("express");
const { Course } = require("../model/course.model");
const { authenticateUser } = require("../middleware/auth");
const courseRouter = express.Router();


// Adding new course to the database. (Route: /new-course)
courseRouter.post("/new-course",authenticateUser,async(req,res)=>{
    try {
        const {title,description,coverImage,length,content} = req.body

        let totalContent = content.length;

        let newCourse = new Course({title,description,coverImage,totalContent,length,content});

        await newCourse.save();

        res.status(200).json({message:"New Course Added", data:newCourse, isOk: true})

    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

// Update or modify the existing document.  (Route : /update/:courseId)
courseRouter.patch("/update/:courseId",authenticateUser,async(req,res)=>{
    try {
        const {courseId} = req.params;

        let updatedData = await Course.findByIdAndUpdate({_id:courseId},{...req.body},{ new: true });
        res.status(200).json({message:"Task Updated successfully", data:updatedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

// Delete the existing Document. (Route : /delete/:courseId)
courseRouter.delete("/delete/:courseId",authenticateUser, async(req,res)=>{
    try {
        const {courseId} = req.params;

        let deletedData = await Course.findByIdAndDelete({_id:courseId});
        res.status(200).json({message:"Task Deleted successfully", data:deletedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

// Retrive all document or course present in the collenction.  (Route: /data)
courseRouter.get("/data",async(req,res)=>{
    try {
        let allCourses = await Course.find();
        res.status(200).json({message:"Get All Courses", data: allCourses, isOk:true})
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})


module.exports = {courseRouter}  // Export courseRouter module