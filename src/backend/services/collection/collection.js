/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { reduce, props, apply, prop, compose, subtract, evolve, head } from 'ramda';
import { isNotEmpty } from '../shared/utils';

const getTotalTimePlayed = reduce((accum, current) => {
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
  }) : {});
}
