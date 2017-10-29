'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pegi_ratings = sequelize.define('Pegi_ratings', {
    pegi_rating_id: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pegi_ratings;
};