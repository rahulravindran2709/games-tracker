

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('Timesheets', ['gameCollectionId'], {
    type: 'FOREIGN KEY',
    name: 'reference_game_collection',
    references: { // Required field
      table: 'Game_Collections',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('Timesheets', 'reference_game_collection'),
};
