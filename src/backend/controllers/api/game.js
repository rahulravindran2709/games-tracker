function GameController() {}
const controllerMethods = {};
controllerMethods.getGames = (request, reply) => {
  reply('Hello world from get game');
};
GameController.prototype = controllerMethods;
const gameControllerInstance = new GameController();
module.exports = gameControllerInstance;
