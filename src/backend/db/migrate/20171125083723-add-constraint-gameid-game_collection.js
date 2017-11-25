

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('Game_Collections', ['game_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_game',
    references: { // Required field
      table: 'Games',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('Game_Collections', 'reference_game'),
};
