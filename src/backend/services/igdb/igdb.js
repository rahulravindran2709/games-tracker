import igdb from 'igdb-api-node';
import Boom from 'boom';
import moment from 'moment';
import { head, compose, pick, mergeAll, prop, objOf } from 'ramda';
import { getBodyFromServiceResponse, getWhereSelectorIfParamNotEmpty } from '../shared/utils';

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
const pickRelevantFields = pick(['id', 'name',
  'created_at', 'updated_at', 'summary', 'first_release_date']);
const checkIfUpdatedDateOld = updatedDate => moment().diff(moment(updatedDate), 'days') >= 365;
export function getGameById(igdbGameId) {
  console.log(igdbGameId, 'In get game by id');
  const { Game } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('service_game_id')(igdbGameId);
  return Game.findOne({
    ...whereSelector,
  })
  .then((gameObject) => {
    // Case 1: Game id is found and is up to date
    if (gameObject && !checkIfUpdatedDateOld(gameObject.service_updatedAt)) {
      return gameObject;
    }
    console.log('Calling igdb');
    const igdbCall = client.games({ ids: [igdbGameId] })
    .then(response => compose(head, getBodyFromServiceResponse)(response))
    .catch(() => require('../../../../data/dummy').data[0]);
    // Case 2: There is no row in our table for given game id
    // Insert row into table
    if (!gameObject) {
      return igdbCall.then((igdbGameObject) => {
        return Game.create(igdbGameObject)
      });
    }
    // Case 3: Row exists but is outdated
    // Check if the igdb updated date from the response is same as the one in our db
    if (checkIfUpdatedDateOld(gameObject.service_updatedAt)) {
      return igdbCall.then();
    }
    throw Boom.badRequest('Invalid scenario');
  });
  /* return client.games({ ids: [igdbGameId] })
  .then((response) => {
    const gameObject = compose(head, getBodyFromServiceResponse)(response);
    const whereSelector = getWhereSelectorIfParamNotEmpty('game_id')(igdbGameId);
    const defaultObject = pickRelevantFields(gameObject);
    return Game.findCreateFind({
      ...whereSelector,
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
    throw Boom.badRequest(error);
  }); */
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
