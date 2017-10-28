import hapi from 'hapi';
import good from 'good';
import Blipp from 'blipp';
import Disk from 'catbox-disk';
import path from 'path';
import webServerPlugin from './ws';
import apiServerPlugin from './api';
import config from '../config';
import configure from '../plugins/configure';
import datastore from '../datastore';
import igdbservice from '../services/igdb';

const server = new hapi.Server({
  cache: [
    {
      name: 'diskCache',
      engine: Disk,
      host: '127.0.0.1',
      cachePath: '/Users/rahulravindran/Desktop/work/cache',
      cleanEvery: 3600000,
      partition: 'cache',
    },
  ],
},
  );
const host = '127.0.0.1';
const wsPort = 3000;
const apiPort = 3010;

server.connection({
  port: wsPort,
  host,
  labels: ['ws'],
});

server.connection({
  port: apiPort,
  host,
  labels: ['api'],
});
const wsServer = server.select('ws');
const apiServer = server.select('api');

wsServer.register({
  register: webServerPlugin,
})
.then(() => server.log(['server', 'ws'], 'Web server is configured'))
.catch(err => console.error(err, 'Error occurred while confguring web server'));
apiServer.realm.modifiers.route.prefix = '/api';
apiServer.register([{
  register: datastore,
}, {
  register: apiServerPlugin,
},
{
  register: igdbservice,
}])
.then(() => server.log(['api'], 'Api configured'))
.catch(err => console.error(err, 'Error occurred'));
server.register([{ register: good, options: config.good },
  { register: Blipp },
  { register: configure,
    options: {
      configFolder: path.resolve(process.cwd(), 'src/backend/config'),
    },
  }])
.then(() => server.start())
.then(() => server.connections.forEach(connection => server.log('Server running at:', connection.info.uri)))
.then(() => console.log(server.plugins['configure'].CurrentConfiguration.get('postgres:host')))
.catch(err => console.error(err, 'Error occurred while trying to start server'));
