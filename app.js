const express=require('express');
const app=express();

app.use('/',(req,res)=>{
    res.status(200).send("app.js is running");
})

module.exports=app;
