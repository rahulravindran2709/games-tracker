const db = require('../models')


const register = (server, options, next) => {
  server.log(['plugin', 'info'], "Registering the 'datastore' plugin");
  const { sequelize, Sequelize, ...models } = db;
  console.log(models, 'Models')
  sequelize
    .authenticate()
    .catch(() => {
      server.log('Unable to connect to the database:', err);
      throw err;
    })
    .then(() => {
      server.log(['plugin', 'datastore'], 'Connection has been established successfully.');
      server.expose('DatabaseModels', models);
      return next();
    })
    .catch((err) => {
      server.log(['plugin', 'datastore'], 'Error while trying to get models' + err)
      throw err;
    });
};


register.attributes = {
  name: 'datastore',
};
export default register;
