const express=require('express');
const app=express();
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://malwablockpbx1:<password>@cluster0.ruri3eo.mongodb.net/?retryWrites=true&w=majority`)
app.use('/',(req,res)=>{
    res.status(200).send("app.js is running");
})

module.exports=app;
