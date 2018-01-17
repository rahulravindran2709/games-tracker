
module.exports = (sequelize, DataTypes) => {
  const EsrbRatings = sequelize.define('Esrb_ratings', {
    esrb_rating_id: DataTypes.STRING,
    rating: DataTypes.STRING,
  });
  return EsrbRatings;
};
