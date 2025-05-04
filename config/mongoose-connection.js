const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI 

const connectDB = async () => {
  try {
    const res = await mongoose.connect(MONGO_URI);
    if (res) {
      console.log("Database connected!");
    }
  } catch (error) {
    console.log("Failed to connect with database: ", error);
  }
};

module.exports = connectDB;
