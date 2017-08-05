const apiControllers = require('../controllers').api;

module.exports = [
  {
    method: 'GET',
    path: '/api',
    handler: apiControllers.GameController.getGames,
  },
];
