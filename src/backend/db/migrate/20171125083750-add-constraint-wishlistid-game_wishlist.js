

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('Game_Wishlists', ['wishlist_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_wishlist',
    references: { // Required field
      table: 'Wishlists',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('Game_Wishlists', 'reference_wishlist'),
};
