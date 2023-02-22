const express=require('express');
const app=express();
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://malwablockpbx1:<password>@cluster0.ruri3eo.mongodb.net/?retryWrites=true&w=majority`)
app.use('/',(req,res)=>{
    res.status(200).send("app.js is running");
})

app.use('/',(req,res)=>{
    res.status(401).send("app.js is not running");
})

module.exports=app;
 // is it working