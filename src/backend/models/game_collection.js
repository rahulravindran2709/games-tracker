'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game_Collection = sequelize.define('Game_Collection', {
    collection_id: DataTypes.NUMBER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Game_Collection;
};