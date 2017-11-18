'use strict';
module.exports = (sequelize, DataTypes) => {
  var User_Collection = sequelize.define('User_Collection', {
    deletedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User_Collection;
};