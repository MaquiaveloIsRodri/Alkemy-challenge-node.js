const { Model, DataTypes, Sequelize } = require("sequelize");
const { GENDER_TABLE } = require('./gender.model')

const MOVIE_TABLE = 'Movie';
const MovieSchema = {
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
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  creationDate: {
    field: 'creation-date',
    allowNull: true,
    type: DataTypes.DATE
  },
  Qualification: {
    allowNull: true,
    type: DataTypes.FLOAT
  },
  GenderId: {
    field: 'Gender-id',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference: {
      model: GENDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Movie extends Model {
  static associate(models) {
    this.belongsTo(models.Gender, { as: 'Gender' })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: 'Movie',
      timestamps: false
    }
  }
}

module.exports = { Movie, MOVIE_TABLE, MovieSchema }
