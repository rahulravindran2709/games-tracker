

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('User_Collections', ['user_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_user',
    references: { // Required field
      table: 'Users',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('User_Collections', 'reference_user'),
};
