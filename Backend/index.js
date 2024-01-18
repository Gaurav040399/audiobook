// Importing all necessary Modules in CommonJS way
const express = require("express");
const {connection} = require("./config/db")
require("dotenv").config();
const cors = require("cors");
const { userRoute } = require("./route/user.route");
const { audioBookRouter } = require("./route/audioBook.route");
const { courseRouter } = require("./route/course.route");

// Declaring port 
const PORT = process.env.PORT || 3000 ;


// Using in-built middlware 
const app = express();
app.use(cors());
app.use(express.json());


// Create basic route
app.get("/",(req,res)=>{
    res.send("home route");
})

app.use("/user",userRoute);
app.use("/audiobook",audioBookRouter);
app.use("/course",courseRouter)


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
