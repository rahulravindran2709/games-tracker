const apiControllers = require('../controllers').api;
console.log(apiControllers, 'Api controllers')
module.exports = [
  {
    method: 'GET',
    path: '/api',
    handler: apiControllers.getGames,
  },
];
