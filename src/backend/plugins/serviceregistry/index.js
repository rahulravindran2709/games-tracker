import igdbservice from '../../services/igdb';
import enumService from '../../services/enums';
import userService from '../../services/users';
import timeService from '../../services/time';
import collectionService from '../../services/collection';

const register = (server, options, next) => {
  server.register([{
    register: igdbservice,
  }, {
    register: enumService,
  }, {
    register: collectionService,
  }, {
    register: userService,
  }, {
    register: timeService,
  }]).then(() => {
    server.log(['plugins', 'services'], 'Services registered successfully');
    return next();
  });
};

register.attributes = {
  name: 'serviceRegistry',
};
export default register;
