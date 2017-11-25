

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Games', [{
    game_id: 1,
    name: 'Game 1',
    summary: 'Some summary',
    storyline: 'Some storyline',
    game_createdAt: new Date(),
    game_updatedAt: new Date(),
    firstReleaseDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    game_id: 2,
    name: 'Game 2',
    summary: 'Some summary 2',
    storyline: 'Some storyline 2',
    game_createdAt: new Date(),
    game_updatedAt: new Date(),
    firstReleaseDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    game_id: 3,
    name: 'Game 3',
    summary: 'Some summary 3',
    storyline: 'Some storyline 3',
    game_createdAt: new Date(),
    game_updatedAt: new Date(),
    firstReleaseDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Games', null, {}),

};
