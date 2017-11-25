

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('Game_Wishlists', ['game_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_game',
    references: { // Required field
      table: 'Games',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('Game_Wishlists', 'reference_game'),
};
