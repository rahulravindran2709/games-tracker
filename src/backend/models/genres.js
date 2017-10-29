'use strict';
module.exports = (sequelize, DataTypes) => {
  var Genres = sequelize.define('Genres', {
    genre_id: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Genres;
};
