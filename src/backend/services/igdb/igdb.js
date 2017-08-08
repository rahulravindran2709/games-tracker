import igdb from 'igdb-api-node';

function IGDBService() {}
const serviceMethods = {};

global['3scaleKey'] = '422b0b250799d114e611860b340af41d';
const client = igdb();
serviceMethods.getGames = () => {
  console.log('In get games');
  return client.games({
    fields: '*', // Return all fields
    limit: 10, // Limit to 5 results
    offset: 15, // Index offset for results
  }).then(response => response.body)
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });
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
