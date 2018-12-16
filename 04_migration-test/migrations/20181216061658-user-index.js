'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addIndex(
          'users',
          ['name'],
          {
            indexName: 'users_name_index',
            indicesType: 'UNIQUE'
          }
        ),
        queryInterface.addColumn('users', 'last_login_at', {
          type: Sequelize.DATE
        }),
        queryInterface.addIndex(
          'users',
          ['last_login_at'],
          {
            indexName: 'users_last_login_at_index'
          }
        )
      ])
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeIndex('users', 'users_name_index'),
        queryInterface.removeIndex('users', 'users_last_login_at_index'),
        queryInterface.removeColumn('users', 'last_login_at')
      ])
    })
  }
};
