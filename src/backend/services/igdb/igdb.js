import igdb from 'igdb-api-node';
import { head, compose, pick, mergeAll, prop, objOf } from 'ramda';
import { getBodyFromServiceResponse } from '../shared/utils';

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
export const getGames = (searchCriteria) => {
  console.log(searchCriteria, 'In search games');
  const searchOptions = createSearchOptions({
    search: { search: searchCriteria.term },
  });
  console.log(searchOptions, 'Final search options');
  return client.games(/* {
    fields: '*',
    limit: 10,
    offset: 15,
    search: searchOptions,
  }*/searchOptions).then(response => response.body)
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });
};
export function getGameById(igdbGameId) {
  // TODO Add db call to check whether the game id exists
  console.log(igdbGameId, 'In get game by id');
  const { Game } = this.models;

  return client.games({
    ids: [igdbGameId],
  }).then((response) => {
    const gameObject = compose(head, getBodyFromServiceResponse)(response);
    const pickRelevantFields = pick(['id', 'name',
      'created_at', 'updated_at', 'summary', 'first_release_date']);
    const defaultObject = pickRelevantFields(gameObject);
    return Game.findCreateFind({
      where: {
        game_id: igdbGameId,
      },
      defaults: {
        name: defaultObject.name,
        game_createdAt: defaultObject.created_at,
        game_updatedAt: defaultObject.updated_at,
      },
    })
    .then(([modelObject, wasInserted]) => {
      const igdbSubset = compose(objOf('igdbGameId'), prop('id'))(gameObject);
      const dbSubset = pick(['id'])(modelObject);
      return mergeAll([gameObject, dbSubset, igdbSubset]);
    });
  })
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });
}

export const getGenreById = (id) => {
  console.log(id, 'In get genre by id');
  return client.genres({
  }, [
    'name', 'id'],
).then((response) => {
  console.log(response.body, 'Genre object received from igdb');
  return response.body;
})
    .catch((error) => {
      console.log(error, 'Error occurred');
      throw error;
    });
};
