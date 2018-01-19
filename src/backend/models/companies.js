'use strict';
module.exports = (sequelize, DataTypes) => {
  var companies = sequelize.define('companies', {
    service_company_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return companies;
};