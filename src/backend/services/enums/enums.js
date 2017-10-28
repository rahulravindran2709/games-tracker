
export function getGenreById(id) {
    console.log(this.model[0].create, 'this inside getgenrebyid')
    return this.model[0].findOne({ where: { genre_id: id } })
};
export const getPegiRatingById = (id) => {};
export const getEsrbRatingById = (id) => {};
