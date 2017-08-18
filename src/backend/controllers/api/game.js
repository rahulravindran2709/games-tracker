import services from '../../services';

const { igdbService } = services;
function GameController() {}
const controllerMethods = {};
controllerMethods.getGames = (request, reply) => {
  const { term, zone } = request.query
  igdbService.getGames({ term, zone }).then((games) => {
    console.log(request.query, 'In search games controller');
    return reply(games);
  });
};
controllerMethods.getGameById = (request, reply) => {
  igdbService.getGameById(request.params.id).then(game => reply(game));
};
GameController.prototype = controllerMethods;
const gameControllerInstance = new GameController();
module.exports = gameControllerInstance;
