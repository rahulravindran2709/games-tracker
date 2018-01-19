

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('Game_Images', ['game_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_game',
    references: {
      table: 'Games',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('Game_Images', 'reference_game'),
};
