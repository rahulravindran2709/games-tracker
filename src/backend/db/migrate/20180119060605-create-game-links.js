
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Game_Links', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    game_id: {
      type: Sequelize.INTEGER,
    },
    url: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Game_Links'),
};
