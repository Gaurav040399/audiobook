// Importing all necessary Modules in CommonJS way
const express = require("express");
const {connection} = require("./config/db")
require("dotenv").config();
const cors = require("cors");
const { userRoute } = require("./route/user.route");
const { audioBookRouter } = require("./route/audioBook.route");
const { courseRouter } = require("./route/course.route");

// Declaring port. if port is not present in env file then it will run on 3000 port
const PORT = process.env.PORT || 3000 ;


// Using in-built middlware 
const app = express();
app.use(cors());
app.use(express.json());


// Create basic route
app.get("/",(req,res)=>{
    res.send("home route");
})

// Using app.use inbuilt method for sending the request for perticular route base on the url
app.use("/user",userRoute);
app.use("/audiobook",audioBookRouter);
app.use("/course",courseRouter)

// Server running on PORT and connected to database
app.listen(PORT , async()=>{
    try {
        await connection;
        console.log(`Server is runnint on ${PORT}`)
        console.log("Connected to Database")
    } catch (error) {
        console.log("Cannot connect to Database");
        console.log(error.message)
    }
})
