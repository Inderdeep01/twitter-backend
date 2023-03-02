const express = require('express')
const router = express.Router()
const Posts = require('../models/posts')
const protect=require('../middleware/protect')
router.get('/',(req,res)=>{
    Posts.find().then((result)=>{res.status(200).json(result)})
})
router.post('/',(req,res)=>{
    const posts = new Posts(req.body)
    posts.save(req.body).then(result=>res.status(201).json(result)).catch(err=>console.log(err))
})
module.exports = router