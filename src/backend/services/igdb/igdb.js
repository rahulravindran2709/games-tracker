import igdb from 'igdb-api-node';

function IGDBService() {}
const serviceMethods = {};

global['3scaleKey'] = '422b0b250799d114e611860b340af41d';
const client = igdb();
serviceMethods.getGames = (term, zone ) => {
  console.log('In search games');
  const data = require(require('path').resolve(process.cwd(), 'data/search.json'));
  return new Promise((resolve, reject) =>resolve(data))
  /*return client.games({
    fields: '*',
    limit: 10,
    offset: 15,
  }).then(response => response.body)
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });*/
};
serviceMethods.getGameById = (id) => {
  console.log('In get game by id');
  return client.games({
    ids: [id],
  }).then(response => response.body)
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });
};
IGDBService.prototype = serviceMethods;
const igdbService = new IGDBService();
module.exports = igdbService;
