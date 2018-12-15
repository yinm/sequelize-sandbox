const express = require('express')
const models = require('../models')
const router = express.Router()

router.get('/', (req, res, next) => {
  const userId = req.query.user_id
  const name = req.query.name

  models.User.findOrCreate(
    {
      'where' : {'id': userId},
      'defaults': { 'id': userId, 'name': name }
    }
  ).spread((user, created) => {
    res.send({ 'user': user, 'created': created })
  })
})

module.exports = router
