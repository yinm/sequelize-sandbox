'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    movieId: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {});
  MovieGenre.associate = function(models) {
    // associations can be defined here
  };
  return MovieGenre;
};
