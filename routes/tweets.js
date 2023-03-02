const express = require('express')
const router = express.Router()
const Posts = require('../models/posts')
const protect=require('../middleware/protect')

router.get('/',(req,res)=>{
    Posts.find().then((result)=>{res.status(200).json(result)}).catch(err=>res.status(500).json(err))
})

router.get('/:user',(req,res)=>{
    Posts.find({username:req.params.user})
        .then((posts)=>res.status(200).json(posts))
        .catch(err=>res.status(500).json(err))
})

router.post('/',protect,(req,res)=>{
    if(req.user.isBanned)
        return res.status(403).json({msg:"You have been banned from posting"})
    const post = new Posts(req.body)
    post.username = req.user.username
    post.save(req.body).then(result=>res.status(201).json(result)).catch(err=>res.status(500).json(err))
})

router.delete('/:postId',protect,(req,res)=>{
    const postId = req.params.postId
    Posts.findById(postId)
        .then((post)=>{
            if(!post)
                return res.status(400).json({msg:"This post does not exist"})
            if(post.username==req.user.username || post.email==req.user.email || req.user.isAdmin)
                Posts.findByIdAndDelete(postId).then(()=>res.status(200).json({msg:"Post deleted successfully"}))
                    .catch(err=>res.status(500).json({msg:"Could not delete post",err}))
            else{
                return res.status(401).json({msg:"You can not delete this post"})
            }
        })
})


module.exports = router