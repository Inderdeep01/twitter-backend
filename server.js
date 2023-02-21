const http = require('http')
const app = require('./app')

const PORT = 3010

const server = http.createServer(app)

server.listen(PORT,()=>{
    console.log(`Listening At Port ${PORT}`)
})

