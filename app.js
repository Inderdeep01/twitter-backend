const express=require('express');
const app=express();
const dotenv = require('dotenv')
dotenv.config()
const tweetHandler = require('./routes/tweets')
//body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGOOSE)
    .then(()=>console.log("Connected to MonogDB"))
    .catch(err=>console.log(err))

app.use('/tweets',tweetHandler)
app.use('/',(req,res)=>{
    res.status(200).send("Welcome to Home Route");
})


module.exports=app;