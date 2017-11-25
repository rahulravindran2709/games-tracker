
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Games', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    game_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    game_createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    game_updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    summary: {
      type: Sequelize.STRING,
    },
    storyline: {
      type: Sequelize.STRING,
    },
    firstReleaseDate: {
      type: Sequelize.DATE,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Games'),
};
