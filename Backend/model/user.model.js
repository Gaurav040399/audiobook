const mongoose = require("mongoose");

// creating user schema
const userSchema = mongoose.Schema({
    name : {type:String, required: true},
    email : {type:String, required:true, unique:true},
    password : {type:String, require:true}
})
// Creating User model
const User = mongoose.model("user",userSchema);

module.exports = {User}; // exporting User module