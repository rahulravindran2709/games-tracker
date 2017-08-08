import services from '../../services';

const { igdbService } = services;
function GameController() {}
const controllerMethods = {};
controllerMethods.getGames = (request, reply) => {
  const { cache } = request.server
  igdbService.getGames().then((games) => {
    return reply(games);
  });
};
controllerMethods.getGameById = (request, reply) => {
  igdbService.getGameById(request.params.id).then(game => reply(game));
};
GameController.prototype = controllerMethods;
const gameControllerInstance = new GameController();
module.exports = gameControllerInstance;
