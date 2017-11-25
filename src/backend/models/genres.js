
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    genre_id: DataTypes.STRING,
    name: DataTypes.STRING,
  });
  return Genres;
};
