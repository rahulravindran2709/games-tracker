/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { compose, head, pick, objOf, converge, pathOr, omit, merge } from 'ramda';
import Boom from 'boom';
import { getDBErrorMessage } from '../shared/utils';

export function getGameMetaDataByCollection(collectionId, gameId) {
  const { Game_Collection, Timesheet } = this.models;
  const { sequelize } = Game_Collection;
  console.log(`${collectionId} - ${gameId} `, 'In get metadata by collection');
  return Timesheet.findAll({
    attributes: [[sequelize.fn('SUM', sequelize.col('timeTaken')), 'totalTimeTaken'], [sequelize.fn('MAX', sequelize.col('timesheetOut')), 'lastPlayed']],
    group: ['gameCollectionId', 'Game_Collection.id'],
    sort: ['timeSheetOut'],
    include: [{
      model: Game_Collection,
      attributes: ['playthroughs'],
      where: {
        collection_id: collectionId,
        game_id: gameId,
      },
    }],
  })
  .then((response) => {
    if (!response || response.length === 0) {
      return {};
    }
    const plainResponse = response[0].get({ plain: true });
    const getPlaythroughs = pathOr(0, ['Game_Collection']);
    const omitField = omit('Game_Collection');
    const flattenedResponse = converge(merge, [omitField, getPlaythroughs])(plainResponse);
    return flattenedResponse;
  })
  .catch((err) => {
    throw Boom.badRequest(err);
  });
}

export function addGameToCollection(collectionId, gameId, gameCollectionBody = {
  playthroughs: 0,
}) {
  const { Collection, Game, Game_Collection } = this.models;
  console.log(`Adding game ${gameId} to collection ${collectionId} ${gameCollectionBody}`);
  return Collection.findById(collectionId).then((collectionObject) => {
    if (!collectionObject) {
      throw Boom.badRequest('Collection not found');
    }
    return Game.findById(gameId)
    .then((gameModel) => {
      if (!gameModel) {
        throw Boom.badRequest('Game not found');
      }
      return Game_Collection.findOne({
        where: {
          collection_id: collectionId,
          game_id: gameId,
        },
      });
    })
    .then((model) => {
      if (model) {
        throw Boom.badRequest('Game already part of collection');
      }
      return collectionObject.addGame(gameId, { through: gameCollectionBody });
    })
    .then(data => compose(objOf('gameCollection'), pick(['collection_id', 'game_id']), head, head)(data))
    .catch((error) => {
      const errorMessage = getDBErrorMessage(error);
      console.log(errorMessage, 'An error occurred while adding game to collection');
      throw Boom.badRequest(errorMessage);
    });
  });
}

export function addGameToWishlist(wishlistId, gameId) {
  const { Wishlist } = this.models;
  console.log(`Adding ${gameId} to collection ${wishlistId}`);
  return Wishlist.findById(wishlistId).then((wishlistObject) => {
    if (!wishlistObject) {
      throw Boom.badRequest('Wishlist not found');
    }
    return wishlistObject.addGame(gameId).catch((error) => {
      const errorMessage = getDBErrorMessage(error);
      console.log(errorMessage, 'An error occurred while adding game to collection');
      throw Boom.badRequest(errorMessage);
    });
  });
}

export function removeGameInCollection(collectionId, gameId) {
  console.log(`Removing ${gameId} from collection ${collectionId}`);
  const { Game_Collection } = this.models;
  return Game_Collection.destroy({
    where: {
      collection_id: collectionId,
      game_id: gameId,
    },
  });
}

export function removeGameInWishlist(wishlistId, gameId) {
  console.log(`Removing ${gameId} from wishlist ${wishlistId}`);
  const { Game_Wishlist } = this.models;
  return Game_Wishlist.destroy({
    where: {
      wishlist_id: wishlistId,
      game_id: gameId,
    },
  });
}
