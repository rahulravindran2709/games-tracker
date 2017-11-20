
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('User_Wishlists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    wishlist_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('User_Wishlists'),
};
