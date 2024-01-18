const express = require("express");
const audioBookRouter = express.Router();
const {AudioBook} = require("../model/audioBook.model");


audioBookRouter.post("/new-data",async(req,res)=>{
    try {
        const {title,author,narrator,length,categories,summary,coverImage,audioFileUrl} = req.body;

        let newAudioBook = new AudioBook({title,author,narrator,length,categories,summary,coverImage,audioFileUrl});

        await newAudioBook.save();
        res.status(200).json({message:"New AudioBook Added",data:newAudioBook, isOk: true})
        
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

audioBookRouter.get("/data",async(req,res)=>{
    try {
        let allAudioBooks = await AudioBook.find();
        res.status(200).json({message:"Get all AudioBooks", data:allAudioBooks, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

audioBookRouter.patch("/update/:bookId",async(req,res)=>{
    try {
        const {bookId} = req.params;

        let updatedData = await AudioBook.findByIdAndUpdate({_id:bookId},{...req.body},{ new: true });
        res.status(200).json({message:"Task Updated successfully", data:updatedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})

audioBookRouter.delete("/delete/:bookId",async(req,res)=>{
    try {
        const {bookId} = req.params;

        let deletedData = await AudioBook.findByIdAndDelete({_id:bookId});
        res.status(200).json({message:"Task Deleted successfully", data:deletedData, isOk:true});
    } catch (error) {
        res.status(400).json({message:error.message, isOk:false})
    }
})



module.exports = {audioBookRouter}