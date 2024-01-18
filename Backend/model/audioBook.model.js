const mongoose = require("mongoose");

// Schema of audiobook 
const audioBookSchema = mongoose.Schema({
    title : {type:String, required : true},
    author : {type:String, required : true},
    narrator : {type:String, required : true},
    length : {type:String, required : true},
    categories : {type:String, required : true},
    summary : {type:String, required : true},
    coverImage : {type:String},
    audioFileUrl : {type:String, required : true}
});

// Model of audiobook
const AudioBook = mongoose.model("audioBook", audioBookSchema);

module.exports = {AudioBook}