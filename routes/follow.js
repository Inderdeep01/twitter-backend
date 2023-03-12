const express=require('express');
const router=express.Router();
const protect=require('../middleware/protect')
router.get('/:username',protect,async(req,res)=>{
    const {username}=req.params;
    const user=await User.findOne({username});
    if(user.isBanned)
    {
        return res.status(401).json({message:'You Cannot Follow This User'});
    }
    var follow=await Follow.findOne({user:req.user._id,follow:user._id}).populate({
        path:'user follow',
        select:'-password -createdAt -updatedAt -isAdmin -_id -__v -email -dob'
    })
    if(follow){
        return res.status(201).json(follow);
    }
    follow=await Follow.create({user:req.user._id,follow:user._id});
    follow=await Follow.findById(follow._id).populate({
        path:'user follow',
        select:'-password -createdAt -updatedAt -isAdmin -_id -__v -email -dob'
    })
    res.status(201).json(follow);
})

