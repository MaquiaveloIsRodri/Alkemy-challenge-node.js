const { Model, DataTypes, Sequelize } = require("sequelize");

const GENDER_TABLE = 'Character';
const GenderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Gender extends Model {
  static associate(models) {
    this.hasMany(models.Movie, {
      as: 'Movies',
      foreignKey: 'GenderId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: GENDER_TABLE,
      modelName: 'Gender',
      timestamps: false
    }
  }
}

module.exports = { Gender, GenderSchema, GENDER_TABLE }
