const mongoose = require('mongoose');

const UserSchema=mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
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