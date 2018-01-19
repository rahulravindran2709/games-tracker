import igdb from 'igdb-api-node';
import Boom from 'boom';
import moment from 'moment';
import { head, compose, pick, pathOr, map, assoc, omit, concat } from 'ramda';
import { mapGameApiObjectToModel } from '../../mappers';
import { getBodyFromServiceResponse, getWhereSelectorIfParamNotEmpty, getDBErrorMessage } from '../shared/utils';
import { OMITTED_FIELDS_GAME } from '../shared/constants';

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
const buildGameModelObject = (apiResponseObject) => {
  // Omit complex fields
  const simpleFieldsOnly = omit(OMITTED_FIELDS_GAME)(apiResponseObject);
  const modelObject = mapGameApiObjectToModel(simpleFieldsOnly);
  const createCover = assoc('image_type', 'Cover')(apiResponseObject.cover);
  // screenshots // Cover image
  modelObject.Game_Images = compose(concat([createCover]),
  map(assoc('image_type', 'Screenshot')))(apiResponseObject.screenshots);
  // Ratings
  modelObject.esrb = pathOr(null, ['esrb', 'rating'])(apiResponseObject);
  modelObject.pegi = pathOr(null, ['pegi', 'rating'])(apiResponseObject);
  // time to time_to_beat
  const timeToBeat = pathOr({}, ['time_to_beat'])(apiResponseObject);
  modelObject.timeToBeat = [timeToBeat.normally, timeToBeat.hastly, timeToBeat.completely];
  // Websites
  // Steam appid
  modelObject.steamAppId = pathOr('', ['external', 'steam'])(apiResponseObject);
  return modelObject;
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
const checkIfUpdatedDateOld = updatedDate => moment().diff(moment(updatedDate), 'days') >= 365;
export function getGameById(igdbGameId) {
  console.log(igdbGameId, 'In get game by id');
  const { Game, Game_Images, Game_Links } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('service_game_id')(igdbGameId);
  const includes = {
    include: [{
      model: Game_Images,
    }, {
      model: Game_Links,
    }] };
  return Game.findOne({
    ...whereSelector,
    include: includes.include,
  })
  .then((gameObject) => {
    // Case 1: Game id is found and is up to date
    if (gameObject && !checkIfUpdatedDateOld(gameObject.service_updatedAt)) {
      return gameObject;
    }
    console.log('Calling igdb');
    const igdbCall = client.games({ ids: [igdbGameId] })
    .then(response => compose(head, getBodyFromServiceResponse)(response))
    .catch(() => {
      const data = require('../../../../data/dummy').data[0];
      return { ...data, id: igdbGameId };
    });
    // Case 2: There is no row in our table for given game id
    // Insert row into table
    if (!gameObject) {
      console.log('Case 2');
      return igdbCall.then((igdbGameObject) => {
        const modelObject = buildGameModelObject(igdbGameObject);
        return Game.create(modelObject, {
          include: includes.include,
        });
      })
      .catch((err) => {
        throw Boom.badRequest(err);
      });
    }
    // Case 3: Row exists but is outdated
    // Check if the igdb updated date from the response is same as the one in our db
    if (gameObject && checkIfUpdatedDateOld(gameObject.service_updatedAt)) {
      return igdbCall.then((igdbGameObject) => {
        // return Game.update
      }).catch((err) => { throw Boom.badRequest(err); });
    }
    throw Boom.badRequest('Invalid scenario');
  })
  .catch((err) => {
    const message = getDBErrorMessage(err);
    console.log(message, 'IN main catch');
    throw Boom.badRequest(message);
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
