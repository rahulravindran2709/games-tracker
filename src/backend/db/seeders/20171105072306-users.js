

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    first_name: 'Rahul',
    last_name: 'Ravindran',
    email: 'rahulravindran2709@gmail.com',
    password: 'testme',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    password: 'testme',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

};
