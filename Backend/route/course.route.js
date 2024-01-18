const express = require("express");
const { Course } = require("../model/course.model");
const courseRouter = express.Router();

courseRouter.post("/new-course",async(req,res)=>{
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

courseRouter.patch("/update/:courseId",async(req,res)=>{
    try {
        const {courseId} = req.params;

        let updatedData = await Course.findByIdAndUpdate({_id:courseId},{...req.body},{ new: true });
        res.status(200).json({message:"Task Updated successfully", data:updatedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

courseRouter.delete("/delete/:courseId",async(req,res)=>{
    try {
        const {courseId} = req.params;

        let deletedData = await Course.findByIdAndDelete({_id:courseId});
        res.status(200).json({message:"Task Deleted successfully", data:deletedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})


courseRouter.get("/data",async(req,res)=>{
    try {
        let allCourses = await Course.find();
        res.status(200).json({message:"Get All Courses", data: allCourses, isOk:true})
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})


module.exports = {courseRouter}