var database = require('../helper/database');
var sequelize = require('sequelize');

class ExampleModel extends sequelize.Model { }

ExampleModel.init({
  modelPk: {
    type: sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  stringToken: {
    type: sequelize.STRING,
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false,
  sequelize: database
});

ExampleModel.associate = function (models) {
  // associations can be defined here
};

module.exports = ExampleModel;
