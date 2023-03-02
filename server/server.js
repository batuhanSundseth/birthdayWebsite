const express = require('express')
const cors = require('cors')
const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '787820224b794da6b4d94c21986427f3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.use(express.json())
app.use(express.static('client'))
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/birthdayWebsite.html'))
})

app.get('/css', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/birthdayWebsite.css'))
})

app.get('/js', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/birthdayWebsite.js'))
})

app.listen(4000, console.log("App running on 4000"))