
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Game_Collections', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    collection_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    game_id: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Game_Collections'),
};
