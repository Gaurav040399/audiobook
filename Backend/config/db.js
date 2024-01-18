const mongoose = require("mongoose");
require("dotenv").config();

// Creating connection to our mongoDB database
const connection = mongoose.connect(process.env.mongoURL);

module.export = {connection} // exporting connection module