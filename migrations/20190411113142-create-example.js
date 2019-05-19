module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('example-model', {
      modelPk: {
        type: Sequelize.STRING,
        primaryKey: true, 
        allowNull: false
      },
      stringToken: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('example-model');
  }
};