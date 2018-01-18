
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
    rating: {
      type: Sequelize.DOUBLE,
    },
    ratingCount: {
      type: Sequelize.INTEGER,
    },
    developers: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    publishers: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    genres: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    platforms: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Games'),
};
