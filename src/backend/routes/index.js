import apiRoutes from './api';
import enumeratedRoutes from './enumerated';
import userRoutes from './users';
import collectionRoutes from './collection';
import gameRoutes from './game';


module.exports = {
  api: apiRoutes,
  enumerated: enumeratedRoutes,
  user: userRoutes,
  collection: collectionRoutes,
  game: gameRoutes,
};
