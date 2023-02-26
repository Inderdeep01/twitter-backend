const express=require("express")
const joi=require('joi')
const bcrypt=require('bcrypt')
const router=express.Router();
const User=require("../models/user");

const UserSchema=joi.object(
    {
        username:joi.string().min(4),
        email:joi.string().email(),
        password:joi.string().required().min(6),
        phone:joi.string().min(10).max(10),
        DOB:joi.date(),
    }
).or("username","email","phone")

router.post("/signup",async(req,res)=>{
    const {username,email,password,phone,DOB}=req.body;
    const {error}=UserSchema.validate({username,email,password,phone,DOB})
    if(error)
    {
        return res.status(400).json(error.details[0].message);
    } 
    const cond={
        $or:[
            {$and:[
                {email:{$eq:email}},
                {email:{$ne:null}}
            ]},
            {$and:[
                {username:{$eq:username}},
                {username:{$ne:null}}
            ]},
            {$and:[
                {phone:{$eq:phone}},
                {phone:{$ne:null}}
            ]},
        ]    
    }
    const existUser=await User.find(cond);
    console.log(existUser);
    if(existUser.length>0)
    {
        return res.status(400).json("User Already Exist")
    }
    const saltRounds=10;
    const encryptPassword=await bcrypt.hash(password, saltRounds)
    User.create({username,email,password:encryptPassword,phone,DOB})
    .then(result=>res.status(201).json(result))
    .catch(err=>res.status(500).json(err))
})


module.exports=router;
