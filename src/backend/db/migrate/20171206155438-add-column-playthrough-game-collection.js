

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Game_Collections', 'playthroughs',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
    }),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Game_Collections', 'playthroughs'),
};
