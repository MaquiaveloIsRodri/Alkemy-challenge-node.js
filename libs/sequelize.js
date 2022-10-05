const { Sequelize } = require("sequelize");
const setupModels = require("../db/model")

const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
})
setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
