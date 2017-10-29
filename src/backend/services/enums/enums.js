import { pick } from 'ramda';

export function getGenreById(id) {
  console.log(this, 'this inside getgenrebyid');
  return this.model.findOne({ where: { genre_id: id } })
  .then(elem => pick(['name', 'genre_id'])(elem));
}
export function getPegiRatingById(id) {
  console.log(this.model, 'this inside getpegiratingbyid');
  return this.model.findOne({ where: { pegi_rating_id: id } })
  .then(elem => pick(['age', 'pegi_rating_id'])(elem));
}
export function getEsrbRatingById(id) {
  console.log(this, 'this inside getesrbratingbyid');
  return this.model.findOne({ where: { esrb_rating_id: id } })
  .then(elem => pick(['rating', 'esrb_rating_id'])(elem));
}
