const dotenv = require('dotenv')
dotenv.config({path: '.env'})

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/index')

const app = express()
const port = 7000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', routes)

app.listen(port, (err) => console.log("START ON PORT: "+port))