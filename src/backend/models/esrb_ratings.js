'use strict';
module.exports = (sequelize, DataTypes) => {
  var Esrb_ratings = sequelize.define('Esrb_ratings', {
    esrb_rating_id: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Esrb_ratings;
};