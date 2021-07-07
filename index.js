const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
const routes = require('./routes/routes')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api', routes)

const port = 3333

server.listen(port, function() {
    console.log(`\n*** Let's paint some happy little routes on port ${port} ***\n`)
})