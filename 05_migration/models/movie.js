'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};
