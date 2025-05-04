const mongoose =require("mongoose");



const productsSchema = new mongoose.Schema({
   image:String,
   name:String,
   price:Number,
   discount:{
    type:Number,
    default:0
   },
   bgcolor:String,
   panelcolor:String,
   textcolor:String
});

const Product = mongoose.model("Product",productsSchema);
module.exports = Product;