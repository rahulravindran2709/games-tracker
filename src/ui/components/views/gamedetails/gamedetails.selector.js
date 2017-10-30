import { createSelector } from 'reselect';
import { pathOr, curry, __, map, evolve, innerJoin, propOr } from 'ramda';

const getGameDetails = pathOr({}, ['gameDetails', 'details']);
const getGenres = pathOr([], ['enums', 'genres']);

const genresFromGameDetails = propOr([], 'genres')
const curriedParseInt = curry(parseInt);
const genreIdsAsInteger = map(evolve({
  genre_id: curriedParseInt(__, 10),
}));
const joinByGenre = innerJoin(
  (genreEnum, genreGameDetails) => genreEnum.genre_id === genreGameDetails);

const selector = createSelector([getGameDetails, getGenres], (gameDetails, genres) => ({
  gameDetails,
  selectedGenres: joinByGenre(genreIdsAsInteger(genres), genresFromGameDetails(gameDetails)),
}));

export default selector;
