/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */


export function getTimesheetEntriesByGameCollection(collectionId, gameId) {
  console.log(`${collectionId};${gameId}`, 'In get timesheet entry by game ');
  const { Timesheet, Game_Collection } = this.models;
  console.log(Timesheet, 'Model')
  return Game_Collection.findAll({
    attributes: ['game_id', 'collection_id'],
    include: [{
      model: Timesheet,
      attributes: [['id', 'timesheetId'], 'timesheetIn', 'timesheetOut'],
    }],
    where: {
      collection_id: collectionId,
      game_id: gameId,
    },
  });
}

export function addTimesheetEntry() {

}
