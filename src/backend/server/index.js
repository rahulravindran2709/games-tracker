import hapi from 'hapi';
import good from 'good';
import Blipp from 'blipp';
import Disk from 'catbox-disk';
import webServerPlugin from './ws';
import apiServerPlugin from './api';
import config from '../config';

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
.then(() => console.log('WS server is configured'))
.catch(err => console.error(err, 'Error occurred while confguring web server'));
apiServer.realm.modifiers.route.prefix = '/api';
apiServer.register({
  register: apiServerPlugin,
})
.then(() => console.log('Api server configured'))
.catch(err => console.error(err, 'Error occurred'));
server.register([{ register: good, options: config.good }, { register: Blipp }])
.then(() => server.start())
.then(() => server.connections.forEach(connection => console.log('Server running at:', connection.info.uri)))
.catch(err => console.error(err, 'Error occurred while trying to start server'));
