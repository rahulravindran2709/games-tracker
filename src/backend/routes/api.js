const apiControllers = require('../controllers').api;

const { GameController } = apiControllers;
module.exports = [
  {
    method: 'GET',
    path: '/games',
    handler: GameController.getGames,
    config: {
      description: 'Get all the games',
      notes: 'Just get all the games',
      tags: ['api', 'game'],
    },
  },
];
