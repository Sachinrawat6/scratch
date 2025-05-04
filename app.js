const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const dotenv = require("dotenv");
dotenv.config();

const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");



// database connection 
connectDB();

// Middlewares setup 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

// rutes define 
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);




app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT} Number`);
})