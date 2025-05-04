const mongoose = require("mongoose");
const config = require("config");
const dbgr = require('debug')("development:mongoose");
// const MONGO_URI = process.env.MONGO_URI 


const connectDB = async () => {
  try {
    const res = await mongoose.connect(`${config.get("MONGODB_URI")}/scatch`);
    if (res) {
      dbgr("Database connected!");
    }
  } catch (error) {
    dbgr("Failed to connect with database: ", error);
  }
};

module.exports = connectDB;
