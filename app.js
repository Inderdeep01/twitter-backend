const express=require('express');
const app=express();

app.use('/',(req,res)=>{
    res.status(200).send("app.js is running");
})

app.use('/',(req,res)=>{
    res.status(401).send("app.js is not running");
})

module.exports=app;
