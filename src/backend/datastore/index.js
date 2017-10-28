import Sequelize from 'sequelize';
import { map, compose } from 'ramda';
import Models from '../models';


const sequelize = new Sequelize('gametracker_enum', 'gametracker', 't3rr1ble', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const defineModelInSequelize = modelObj => sequelize.define(modelObj.name, modelObj.model);
const mapModelSyncFn = map(definedModel => definedModel.sync());
const mapDefineModels = map(defineModelInSequelize);
const register = (server, options, next) => {
  server.log(['plugin', 'info'], "Registering the 'datastore' plugin");
  sequelize
    .authenticate()
    .then(() => {
      server.log(['plugin', 'datastore'], 'Connection has been established successfully.');
      const definedModels = compose(mapModelSyncFn, mapDefineModels)(Models);
      return Promise.all(definedModels)
      .then((syncedModels) => {
        console.log(syncedModels, 'Finished');
        server.expose('DatabaseModels', syncedModels);
      });
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
