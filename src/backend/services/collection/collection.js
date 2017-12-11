/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { reduce, props, apply, prop, compose, subtract, evolve, head } from 'ramda';
import { getWhereSelectorIfParamNotEmpty, isNotEmpty } from '../shared/utils';

const getTotalTimePlayed = reduce((accum, current) => {
  console.log(current, 'Value of current')
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
  const { Collection, Game } = this.models;
  console.log(`Adding ${gameId} to collection ${collectionId} ${gameCollectionBody}`)
  const whereSelector = getWhereSelectorIfParamNotEmpty('collection_id')(collectionId);
  return new Promise((resolve, reject) => resolve('Done'));
}
