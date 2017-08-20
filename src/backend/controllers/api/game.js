
function GameController() {}
const controllerMethods = {};
controllerMethods.getGames = (request, reply) => {
  const { term, zone } = request.query;
  console.log(request.query, 'In search games controller');
  return request.server.methods.search({ term, zone }).then((games) => {
    return reply(games);
  });
};
controllerMethods.getGameById = (request, reply) => {
  request.server.methods['getGameById'](request.params.id).then(game => reply(game));
};
GameController.prototype = controllerMethods;
const gameControllerInstance = new GameController();
module.exports = gameControllerInstance;
