module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('User_Wishlists', ['wishlist_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_wishlist',
    references: {
      table: 'Wishlists',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('User_Wishlists', 'reference_wishlist'),
};
