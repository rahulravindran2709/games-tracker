/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { getWhereSelectorIfParamNotEmpty, pickFieldsFromArrayResponse } from '../shared/utils';
import { mapUserApiObjectToModel } from '../../mappers/index';


export function getUserById(id) {
  console.log(id, 'this inside getUserById');
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(id);
  return this.model.findAll(whereSelector)
  .then(pickFieldsFromArrayResponse(['email', 'first_name', 'last_name']));
}

export function getUserCollectionsByUserId(id) {
  console.log(id, 'Inside getUserCollections');
  const { User, Collection } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(id);
  return User.findAll({ include: [
    {
      attributes: ['collection_name', ['id', 'collection_id']],
      model: Collection,
      through: {
        attributes: [],
      },
    }],
    attributes: [['id', 'user_id']],
    ...whereSelector,
  });
}

export function getUserWishlistsByUserId(id) {
  console.log(id, 'Inside getUserWishlists');
  const { User, Wishlist } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(id);
  return User.findAll({ include: [
    {
      attributes: ['wishlist_name', ['id', 'wishlist_id']],
      model: Wishlist,
      through: {
        attributes: [],
      },
    }],
    attributes: [['id', 'user_id']],
    ...whereSelector,
  });
}

export function getGamesByCollectionId(id) {
  console.log(id, 'Inside getGamesByCollection');
  const { Game, Collection } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(id);
  return Collection.findAll({ include: [
    {
      attributes: ['name', ['id', 'game_id']],
      model: Game,
      through: {
        attributes: [],
      },
    }],
    attributes: [['id', 'collection_id']],
    ...whereSelector,
  });
}


export function getGamesByWishlistId(id) {
  console.log(id, 'Inside getGamesByWishlist');
  const { Game, Wishlist } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(id);
  return Wishlist.findAll({ include: [
    {
      attributes: ['name', ['id', 'game_id']],
      model: Game,
      through: {
        attributes: [],
      },
    }],
    attributes: [['id', 'wishlist_id']],
    ...whereSelector,
  });
}

export function addNewUser(user) {
  console.log(user, 'New user');
  const { User } = this.models;
  const userModelObject = mapUserApiObjectToModel(user);
  console.log(userModelObject, 'Model object')
  return User.create(userModelObject);
}
