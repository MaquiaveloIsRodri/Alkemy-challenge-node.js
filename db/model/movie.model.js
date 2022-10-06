const { Model, DataTypes, Sequelize } = require("sequelize");

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
  idCharacter: {
    field: 'id-character',
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class Movie extends Model {
  static associate() {
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
