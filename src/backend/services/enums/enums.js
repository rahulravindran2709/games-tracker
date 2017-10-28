import { pick } from 'ramda'

export function getGenreById(id) {
  console.log('this inside getgenrebyid');
  return this.model.findOne({ where: { genre_id: id } })
  .then(elem => pick(['name', 'genre_id'])(elem));
}
export const getPegiRatingById = (id) => {};
export const getEsrbRatingById = (id) => {};
