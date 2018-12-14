const dbConfig = require('./db-config')

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

module.exports = new DbClient()
