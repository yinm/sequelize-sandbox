const Sequelize = require('sequelize')
const dbConfig = require('../db/db-config')

const employee = dbConfig.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  tel: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = employee
