
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Games', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    service_game_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: true,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    service_createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    service_updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    summary: {
      type: Sequelize.TEXT,
    },
    storyline: {
      type: Sequelize.TEXT,
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
    relatedGames: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    pegi: {
      type: Sequelize.INTEGER,
    },
    esrb: {
      type: Sequelize.INTEGER,
    },
    steamAppId: {
      type: Sequelize.STRING,
    },
    timeToBeat: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Games'),
};
