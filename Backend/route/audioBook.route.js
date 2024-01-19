const express = require("express");
const audioBookRouter = express.Router();
const {AudioBook} = require("../model/audioBook.model");
const { authenticateUser } = require("../middleware/auth");

// Adding new audiobook to the database. (Route: /new-data)
audioBookRouter.post("/new-data",authenticateUser, async(req,res)=>{
    try {
        const {title,author,narrator,length,categories,summary,coverImage,audioFileUrl} = req.body;

        let newAudioBook = new AudioBook({title,author,narrator,length,categories,summary,coverImage,audioFileUrl});

        await newAudioBook.save();
        res.status(200).json({message:"New AudioBook Added",data:newAudioBook, isOk: true})
        
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

// Retrive all document or audiobook present in the collenction.  (Route: /data)
audioBookRouter.get("/data",async(req,res)=>{
    try {
        let allAudioBooks = await AudioBook.find();
        res.status(200).json({message:"Get all AudioBooks", data:allAudioBooks, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

// Update or modify the existing document.  (Route : /update/:bookId)
audioBookRouter.patch("/update/:bookId",authenticateUser, async(req,res)=>{
    try {
        const {bookId} = req.params;

        let updatedData = await AudioBook.findByIdAndUpdate({_id:bookId},{...req.body},{ new: true });
        res.status(200).json({message:"Task Updated successfully", data:updatedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

// Delete the existing Document. (Route : /delete/:bookId)
audioBookRouter.delete("/delete/:bookId",authenticateUser, async(req,res)=>{
    try {
        const {bookId} = req.params;

        let deletedData = await AudioBook.findByIdAndDelete({_id:bookId});
        res.status(200).json({message:"Task Deleted successfully", data:deletedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})



module.exports = {audioBookRouter} // Export audioRouter module