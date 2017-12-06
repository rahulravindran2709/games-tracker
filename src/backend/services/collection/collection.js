/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { getWhereSelectorIfParamNotEmpty, pickFieldsFromArrayResponse } from '../shared/utils';

export function getGameMetaDataByCollection(collectionId, gameId) {
  const { Game_Collection } = this.models;
  console.log(`${collectionId} - ${gameId}`, 'In get metadata by collection');
  return Game_Collection.findAll({
    attributes: [['collection_id', 'collectionId'],
  ['game_id', 'gameId']],
    where: {
      collection_id: collectionId,
      game_id: gameId,
    },
  });
}
