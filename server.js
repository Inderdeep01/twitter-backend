const http = require('http')
const app = require('./app')

const PORT = 3010

const server = http.createServer(app)

app.listen(PORT)