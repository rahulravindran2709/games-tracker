import { createSelector } from 'reselect';
import { path, pathOr, curry, __, map, evolve, innerJoin, propOr, toString, propEq, compose, find } from 'ramda';

const getGameCollectionDetails = path(['gameDetails', 'collectionDetails']);
const getGameDetails = pathOr({}, ['gameDetails', 'details']);
const getUserId = path(['auth', 'user', 'id']);
const getGenres = pathOr([], ['enums', 'genres']);
const getEsrbRatings = pathOr([], ['enums', 'esrb']);
const getPegiRatings = pathOr([], ['enums', 'pegi']);
/** All game details field getters */
const getEsrbRatingFromGameDetails = pathOr('', ['esrb', 'rating']);
const getPegiRatingFromGameDetails = pathOr('', ['pegi', 'rating']);
const genresFromGameDetails = propOr([], 'genres');
const curriedParseInt = curry(parseInt);

/** All field manipulations */
const genreIdsAsInteger = map(evolve({
  genre_id: curriedParseInt(__, 10),
}));
const joinByGenre = innerJoin(
  (genreEnum, genreGameDetails) => genreEnum.genre_id === genreGameDetails);
const findEsrbById = id => elem => propEq('esrb_rating_id', toString(id))(elem);
const findPegiById = id => elem => propEq('pegi_rating_id', toString(id))(elem);
const selector = createSelector(
  [getGameDetails, getGenres, getEsrbRatings, getPegiRatings, getGameCollectionDetails,
    getUserId],
  (gameDetails, genres, esrbRatings, pegiRatings, gameCollection, userId) => ({
    gameDetails,
    selectedGenres: joinByGenre(genreIdsAsInteger(genres), genresFromGameDetails(gameDetails)),
    selectedEsrb: compose(find(__, esrbRatings),
      findEsrbById, getEsrbRatingFromGameDetails)(gameDetails),
    selectedPegi: compose(find(__, pegiRatings),
      findPegiById, getPegiRatingFromGameDetails)(gameDetails),
    gameCollection,
    userId,
  }));

export default selector;
