

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
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
