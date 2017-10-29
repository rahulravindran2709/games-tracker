

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Esrb_ratings', [{
    esrb_rating_id: 1,
    rating: 'RP',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    esrb_rating_id: 2,
    rating: 'EC',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    esrb_rating_id: 3,
    rating: 'E',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    esrb_rating_id: 4,
    rating: 'E10+',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    esrb_rating_id: 5,
    rating: 'T',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    esrb_rating_id: 6,
    rating: 'M',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    esrb_rating_id: 7,
    rating: 'AO',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Esrb_ratings', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  ,
};
