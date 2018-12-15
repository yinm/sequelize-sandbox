const Sequelize = require('sequelize')
const dbConfig = require('./db-config')
const employee = require('../model/employee')

const result = {
  status: null,
  record: null,
  message: ''
}

function initializeResult() {
  result.status = null
  result.record = null
  result.message = ''
}

function setResult(status, record, message) {
  initializeResult()
  result.status = status
  if (record) {
    result.record = record
  } else {
    result.message = message
  }

  return result
}

const DbClient = function() {
  dbConfig
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch((err) => {
      console.error('Unable to connect to the database: ', err)
    })
}

DbClient.prototype.register = function(param, callback) {
  employee.create(param)
    .then((record) => {
      callback(setResult(200, record, null))
    })
    .catch((err) => {
      callback(setResult(500, null, err))
    })
}

function findAll(callback) {
  employee.findAll()
    .then((record) => {
      callback(setResult(200, record, null))
    })
    .catch((err) => {
      callback(setResult(500, null, err))
    })
}

function findById(id, callback) {
  employee.findById(id)
    .then((record) => {
      if (record) {
        callback(setResult(200, record, null))
      } else {
        callback(setResult(500, null, err))
      }
    })
}

DbClient.prototype.find = function(query, callback) {
  if (query.id) {
    findById(query.id, callback)
  } else {
    findAll(callback)
  }
}

DbClient.prototype.update = function(param, query, callback) {
  const filter = {
    where: {
      id: query.id
    }
  }

  employee.update(param, filter)
    .then((record) => {
      callback(setResult(200, record, null))
    })
    .catch((err) => {
      callback(setResult(500, null, err))
    })
}

DbClient.prototype.remove = function(query, callback) {
  const filter = {
    where: {
      id: query.id
    }
  }

  employee.destroy(filter)
    .then((record) => {
      callback(setResult(200, record, null))
    })
    .catch((err) => {
      callback(setResult(500, null, err))
    })
}

module.exports = new DbClient()
