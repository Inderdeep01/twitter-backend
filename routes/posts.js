const express = require('express')
const router = express.Router()
const Posts = require('../model/posts')


router.get('/' ,(req,res)=>{
    Posts.find().then((result)=>{res.status(200).json(result)})
})

router.post('/', (req,res)=>{
    const posts = new Posts(req.body)
   Posts.save(req.body).then(result=>{res.status(201).json(result)})
})


module.exports = router