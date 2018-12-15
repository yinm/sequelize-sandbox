const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const index = require('./routes/index')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
