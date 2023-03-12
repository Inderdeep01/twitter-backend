const express=require('express')
const protect = require('../middleware/protect');
const router=express.Router();

router.get('/',protect,async(req,res)=>{
    
})

module.exports=router;