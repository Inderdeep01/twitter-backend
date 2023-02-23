const express = require('express') //jo bhi mujhe return milega express se vo const express main hold hoga
const user = require('./user')


const app = express()

//middleware
app.use(express.json())//parser hai body ko object bnoa aur req,body main save krdo




/* app.listen(3000 , ()=>{
    console.log('Listening on port 3000')
}) */
//parameter main fnc pass karke jab ye sucess hoga to listen karke msg show hoagg





//to handle request app.get to handle get request

app.get('/', (req,res)=>{
    res.json({messgae :'Api is Working'})
})

app.get('/api/user', (req,res)=>{
    res.json(user)
})

// get main hum data dete hain post amin data server ko dete han
 
app.post('/api/user', (req,res)=>

{

    if(!req.body.body){
        res.status(400)
        return res.json({error: "body is required..."})
    }
    const users= {
        id : user.length+1,
        username : req.body.username,
        heading : req.body.heading,
        body : req.body.body
    }

    user.push(users)
    res.json(user)
})