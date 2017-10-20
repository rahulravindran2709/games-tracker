import Sequelize from 'sequelize';
import Models from '../models';

const sequelize = new Sequelize('gametracker_enum', 'gametracker', 't3rr1ble', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    Models.forEach(modelObj => sequelize.define(modelObj.name, modelObj.model))
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
