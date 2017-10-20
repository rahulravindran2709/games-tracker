import Sequelize from 'sequelize';

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

  },
}];

export default enums;
