const Sequelize = require('sequelize');

const enums = [{
  name: 'Genre',
  model: {
    genre_id: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
}, {
  name: 'Pegi_rating',
  model: {
    pegi_rating_id: {
      type: Sequelize.INTEGER,
    },
    age: {
      type: Sequelize.STRING,
    },
  },
}, {
  name: 'Esrb_rating',
  model: {
    esrb_rating_id: {
      type: Sequelize.INTEGER,
    },
    rating: {
      type: Sequelize.STRING,
    },
  },
}];

module.exports = enums;