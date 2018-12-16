'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('users', 'email', {
          type: Sequelize.STRING,
          after: 'country_code'
        }),
        queryInterface.addColumn('users', 'prefecture_code', {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
          after: 'email'
        })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('users', 'email'),
        queryInterface.removeColumn('users', 'prefecture_code')
      ])
    })
  }
};
