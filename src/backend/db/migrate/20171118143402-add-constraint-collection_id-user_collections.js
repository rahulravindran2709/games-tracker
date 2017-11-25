

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('User_Collections', ['collection_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_collection',
    references: { // Required field
      table: 'Collections',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('User_Collections', 'reference_collection'),
};
