const mongoose = require('mongoose');

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false, 
    },
    DOB:{
        type:Date
    } 
})

module.exports=mongoose.model("User",UserSchema)