/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { reduce, props, apply, prop, compose, subtract, evolve, head } from 'ramda';
import { getWhereSelectorIfParamNotEmpty, isNotEmpty, getDBErrorMessage } from '../shared/utils';

const getTotalTimePlayed = reduce((accum, current) => {
  console.log(current, 'Value of current');
  const currentPlainObject = current.get({ plain: true });
  const parseTimesheetDates = evolve({
    timesheetIn: Date.parse,
    timesheetOut: Date.parse,
  });
  const getTimesInOrder = props(['timesheetOut', 'timesheetIn']);
  const timeDifference = compose(apply(subtract),
  getTimesInOrder, parseTimesheetDates)(currentPlainObject);
  return accum + timeDifference;
}, 0);

const getLastPlayed = compose(prop('timesheetOut'), head);
export function getGameMetaDataByCollection(collectionId, gameId) {
  const { Game_Collection, Timesheet } = this.models;
  console.log(`${collectionId} - ${gameId}`, 'In get metadata by collection');
  return Timesheet.findAll({
    attributes: ['timesheetIn', 'timesheetOut'],
    order: [['timesheetOut', 'DESC']],
    include: [{
      attributes: ['playthroughs'],
      model: Game_Collection,
      where: {
        collection_id: collectionId,
        game_id: gameId,
      },
    }],
  })
  .then(response => isNotEmpty(response) ? ({
    totalTimePlayed: getTotalTimePlayed(response),
    lastPlayed: getLastPlayed(response),
    collectionId,
    gameId,
    ...response[0].Game_Collection.get({
      plain: true,
    }),
  }) : {});
}

export function addGameToCollection(collectionId, gameId, gameCollectionBody) {
  const { Collection } = this.models;
  console.log(`Adding ${gameId} to collection ${collectionId} ${gameCollectionBody}`);
  return Collection.findById(collectionId).then((collectionObject) => {
    if (!collectionObject) {
      throw new Error('Collection not found');
    }
    return collectionObject.addGame(gameId, { through: gameCollectionBody })
    .catch((error) => {
      const errorMessage = getDBErrorMessage(error);
      console.log(errorMessage, 'An error occurred while adding game to collection')
      throw new Error(errorMessage);
    });
  });
}

export function addGameToWishlist(wishlistId, gameId) {
  const { Wishlist } = this.models;
  console.log(`Adding ${gameId} to collection ${wishlistId}`);
  return Wishlist.findById(wishlistId).then((wishlistObject) => {
    if (!wishlistObject) {
      throw new Error('Collection not found');
    }
    return wishlistObject.addGame(gameId).catch((error) => {
      const errorMessage = getDBErrorMessage(error);
      console.log(errorMessage, 'An error occurred while adding game to collection')
      throw new Error(errorMessage);
    });
  });
}
