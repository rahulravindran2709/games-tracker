const apiControllers = require('./api');
const wsControllers = require('./ws');

module.exports = {
  api: apiControllers,
  ws: wsControllers,
};
