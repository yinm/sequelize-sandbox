'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {});
  Actor.associate = function(models) {
    // associations can be defined here
  };
  return Actor;
};