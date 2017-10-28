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

const defineModelInSequelize = modelObj => sequelize.define(modelObj.name, modelObj.model)
const register = (server, options, next) => {
  server.log(['plugin', 'info'], "Registering the 'datastore' plugin");
  sequelize
    .authenticate()
    .then(() => {
      server.log(['plugin', 'datastore'], 'Connection has been established successfully.');
      const definedModels = Models.map(defineModelInSequelize)
      .map(definedModel => definedModel.sync());
      Promise.all(definedModels)
      .then(md => console.log(md, 'Finished'))
      server.expose('databaseModels', definedModels);
    })
    .catch((err) => {
      server.log('Unable to connect to the database:', err);
    });
  return next();
};


register.attributes = {
  name: 'datastore',
};
export default register;
