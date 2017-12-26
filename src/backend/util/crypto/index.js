import bcrypt from 'bcrypt';

export const generateHash = password =>
  bcrypt.genSalt(10).then(salt => bcrypt.hash(password, salt));

export const verifyPassword = (passwordFromReq, passwordFromDb) =>
  bcrypt.compare(passwordFromReq, passwordFromDb);
