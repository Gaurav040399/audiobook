const mongoose = require("mongoose");

// Creating Course schema 
const courseSchema = mongoose.Schema({
    title : {type: String, required:true},
    description : {type: String, required:true},
    length : {type: String, required:true},
    coverImage : {type:String},
    totalContent : {type: Number},
    content : [{type : mongoose.Schema.Types.ObjectId, ref:"audioBook"}]
})

// Creating Course Model
const Course = mongoose.model("course",courseSchema);

module.exports = {Course}; // exporting Course module