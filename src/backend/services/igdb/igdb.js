import igdb from 'igdb-api-node';

function IGDBService() {}
const serviceMethods = {};

global['3scaleKey'] = '422b0b250799d114e611860b340af41d';
const client = igdb();
const createSearchOptions = (options) => {
  const defaultSearchOptions = {
    fields: '*',
    limit: 10,
    offset: 0,
  };
  return { ...defaultSearchOptions, ...options.search };
};
export const getGames = (term, zone) => {
  console.log('In search games');
  const data = require(require('path').resolve(process.cwd(), 'data/search.json'));
  const searchOptions = createSearchOptions({
    search: term,
  });
  console.log(searchOptions, 'Final search options');
  const filteredData = data.filter(game => game.name.toLowerCase().indexOf(searchOptions.term.toLowerCase()) !== -1);
  return new Promise((resolve, reject) => resolve(filteredData));
  /* return client.games({
    fields: '*',
    limit: 10,
    offset: 15,
    search: term,
  }).then(response => response.body)
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });*/
};
export const getGameById = (id) => {
  console.log(id, 'In get game by id');
  const data = require(require('path').resolve(process.cwd(), 'data/search.json'));
  return new Promise((resolve, reject) => resolve(data.find(game => game.id == id)));
  /* return client.games({
    ids: [id],
  }).then(response => response.body)
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });*/
};
