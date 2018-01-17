/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import Boom from 'boom';
import { mapTimesheetApiObjectToModel } from '../../mappers/index';

export function getTimesheetEntriesByGameCollection(collectionId, gameId) {
  console.log(`${collectionId};${gameId}`, 'In get timesheet entry by game ');
  const { Timesheet, Game_Collection } = this.models;
  return Game_Collection.findOne({
    attributes: ['game_id', 'collection_id'],
    include: [{
      model: Timesheet,
      attributes: [['id', 'timesheetId'], 'timesheetIn', 'timesheetOut', 'timeTaken'],
    }],
    where: {
      collection_id: collectionId,
      game_id: gameId,
    },
  });
}

export function addTimesheetEntry(collectionId, gameId, timesheetBody) {

  console.log(`${collectionId};${gameId}`, 'Add a new timesheet');
  const { Game_Collection } = this.models;
  return Game_Collection.findOne({
    where: {
      collection_id: collectionId,
      game_id: gameId,
    },
  })
  .then((gameCollectionModel) => {
    if (!gameCollectionModel) {
      throw Boom.badRequest('Game not asociated with a collection');
    }
    const timesheetModelObject = mapTimesheetApiObjectToModel(timesheetBody);
    return gameCollectionModel.createTimesheet(timesheetModelObject);
  })
  .catch(err => {
    console.log(err);
    throw Boom.badRequest(err);
  });
}
