
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Game_Images', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    game_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image_type: {
      type: Sequelize.STRING,
    },
    width: {
      type: Sequelize.INTEGER,
    },
    height: {
      type: Sequelize.INTEGER,
    },
    url: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Game_Images'),
};
