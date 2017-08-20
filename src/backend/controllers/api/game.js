
function GameController() {}
const controllerMethods = {};
controllerMethods.getGames = (request, reply) => {
  const { term, zone } = request.query;
  console.log(request.query, 'In search games controller');
  request.server.methods.search({ term, zone }, (err, results) => { console.log(err); return reply(results); });
};
controllerMethods.getGameById = (request, reply) =>
  request.server.methods.getGameById(request.params.id, (err, game) => reply(game));
  // .then(game => reply(game));;
GameController.prototype = controllerMethods;
const gameControllerInstance = new GameController();
module.exports = gameControllerInstance;
