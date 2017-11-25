

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('User_Collections', ['collection_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_collection',
    references: { // Required field
      table: 'Collections',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('User_Collections', 'reference_collection'),
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

};
