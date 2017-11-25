

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('Game_Collections', ['collection_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_collection',
    references: { // Required field
      table: 'Collections',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('Game_Collections', 'reference_collection'),
};
