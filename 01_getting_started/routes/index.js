const express = require('express')
const router = express.Router()
const dbClient = require('../app/db/db-client')

router.get('/find', (req, res, next) => {
  const query = req.query
  dbClient.find(query, (result) => {
    res.json(result)
  })
})

router.post('/register', (req, res, next) => {
  const addData = req.body
  dbClient.register(addData, (result) => {
    res.json(result)
  })
})

router.put('/update', (req, res, next) => {
  const query = req.query
  const addData = req.body
  dbClient.update(addData, query, (result) => {
    res.json(result)
  })
})

router.delete('/delete', (req, res, next) => {
  const query = req.query
  dbClient.remove(query, (result) => {
    res.json(result)
  })
})

module.exports = router
