const mongoose =require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
   products:{
    type:Array,
    default:[],
   },
    isAdmin:Boolean,
    picture:String,
    gstin:String
});

const Owner = mongoose.model("Owner",ownerSchema);
module.exports = Owner;