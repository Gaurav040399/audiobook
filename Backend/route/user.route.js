// Importing All modules in commonJS way
const express = require("express")
const userRoute = express.Router()
const {User} = require("../model/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// Creating new user and save in the database (Route : /register)
userRoute.post("/register",async(req,res)=>{
    try {
        const {name,email,password} = req.body;

        // Search is user already present or not
        const isUserPresent = await User.findOne({email});
        if(isUserPresent){
            return res.status(400).json({message:"User already present, Please Login",isOk:false})
        }

        const hashPassword = await bcrypt.hash(password,4);
        const newUser = new User({name,email,password:hashPassword})
        await newUser.save();
        res.status(201).json({message:"Registration successful",isOk:true})
    } catch (error) {
        res.status(400).json({error:error.message,message:"Registration failed",isOk:false})
    }
    })

// Allow existing user to login and access the product. (Route : /login)
userRoute.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;

        // Search is user already present or not
        const isUserPresent = await User.findOne({email});
        if(!isUserPresent){
            return res.status(404).json({message:"User Not Found, Please Register First",isOk:false})
        }

        const isPasswordCorrect = bcrypt.compareSync(password,isUserPresent.password);

        if(!isPasswordCorrect){
            return res.status(401).json({message:"Incorrect password",isOk:false})
        }

        const token =  jwt.sign({userID:isUserPresent._id,email:isUserPresent.email}, process.env.secretKey)
        // console.log(token)
        res.status(200).json({message:"Login Successful", token:token,isOk:true})
    } catch (error) {
        res.status(400).json({error:error.message,message:"Login failed",isOk:false})
    }
})

module.exports = { userRoute } // Exporting userRoute module

