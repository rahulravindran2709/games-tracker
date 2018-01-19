/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import Boom from 'boom';
import JWT from 'jsonwebtoken';
import aguid from 'aguid';
import { pick } from 'ramda';
import { generateHash, verifyPassword } from '../../util/crypto';
import { getWhereSelectorIfParamNotEmpty, pickFieldsFromArrayResponse } from '../shared/utils';
import { mapUserApiObjectToModel, mapCollectionApiObjectToModel, mapWishlistApiObjectToModel } from '../../mappers/index';


export function getUserById(id) {
  console.log(id, 'this inside getUserById');
  const { User } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(id);
  return User.findAll(whereSelector)
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

export function getGameCollectionByUser(userId, gameId) {
  console.log(userId, gameId, 'In get gameCollectionByUser');
  const { User, Game, Collection } = this.models;
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(userId);
  const gameWhereSelector = getWhereSelectorIfParamNotEmpty('service_game_id')(gameId);
  return User.findOne({
    attributes: [['id', 'userId']],
    include: [{
      model: Collection,
      through: {
        attributes: [],
      },
      attributes: [['id', 'collectionId'], 'collection_name'],
      include: [{
        model: Game,
        attributes: [],
        through: {
          attributes: [],
        },
        ...gameWhereSelector,
      }],
    }],
    ...whereSelector,
  });
}
export function addNewUser(user) {
  console.log(user, 'New user');
  const { User } = this.models;
  const userModelObject = mapUserApiObjectToModel(user);
  const hashPr = generateHash(userModelObject.password);
  return hashPr.then((hash) => {
    const userModelWithHashPass = { ...userModelObject, password: hash };
    return User.create(userModelWithHashPass);
  });
}

export function updateUser(id, user) {
  console.log(user, 'Updated user');
  const { User } = this.models;
  const userModelObject = mapUserApiObjectToModel(user);
  return User.findById(id)
  .then(userFromDb => User.update(userModelObject, { where: { id } }))
  .catch((err) => { throw Boom.badRequest(err); });
}

export function createUserCollection(userId, collection) {
  console.log(collection, 'New collection');
  const { User, Collection } = this.models;
  const collectionModelObject = mapCollectionApiObjectToModel(collection);
  return Collection.create(collectionModelObject)
  .then((collectionModel) => {
    if (!collectionModel) {
      throw Boom.BadRequest('Collection creation failed');
    }
    return User.findById(userId).then(userModelFromDB =>
      userModelFromDB.addCollection(collectionModel));
  })
    .catch((error) => { throw Boom.badRequest(error); });
}

export function createUserWishlist(userId, wishlist) {
  console.log(wishlist, 'New collection');
  const { User, Wishlist } = this.models;
  const wishlistModelObject = mapWishlistApiObjectToModel(wishlist);
  return Wishlist.create(wishlistModelObject)
  .then((wishlistModel) => {
    if (!wishlistModel) {
      throw Boom.BadRequest('Wishlist creation failed');
    }
    return User.findById(userId).then(userModelFromDB =>
      userModelFromDB.addWishlist(wishlistModel));
  })
    .catch((error) => { throw Boom.badRequest(error); });
}
const generateNewSession = () => ({
  valid: true,
  id: aguid(),
  exp: new Date().getTime() + (30 * 60 * 1000),
});
export function authenticateUser(credentials) {
  console.log('Trying to authenticate user', credentials.email);
  const { User } = this.models;
  const { secret, app } = this.auth;
  const whereSelector = getWhereSelectorIfParamNotEmpty('email')(credentials.email);
  return User.findOne({ ...whereSelector })
  .then((userModelObject) => {
    if (!userModelObject) {
      throw Boom.badRequest('User not exists');
    }
    const isValidPassword = verifyPassword(credentials.password, userModelObject.password);
    return { isValidPassword, user: userModelObject };
  })
  .then(({ isValidPassword, user }) => {
    if (!isValidPassword) {
      throw Boom.unauthorized('Wrong password');
    }
    const session = generateNewSession();
    app.sessions[session.id] = session;
    const token = JWT.sign(session, secret);
    return { token, user: pick(['email', 'first_name', 'last_name', 'id'])(user) };
  })
  .catch((err) => { throw Boom.badRequest(err.message); });
}

export function logoutUser(credentials) {
  console.log('Trying to log out user');
  const { app } = this.auth;
  const session = app.sessions[credentials.id];
  console.log(' - - - - - - SESSION - - - - - - - -');
  console.log(session);
  // update the session to no longer valid:
  session.valid = false;
  session.ended = new Date().getTime();
  // create the session in Redis
  app.sessions[session.id] = session;
  return new Promise(resolve => resolve({
    message: 'Successfully logged out',
  }));
}
