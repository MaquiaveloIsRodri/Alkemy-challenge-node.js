const { Model, DataTypes, Sequelize } = require("sequelize");

const MOVIE_CHARACTER_TABLE = 'Movie-Character';
const MovieCharacterSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idCharacter: {

  },
  idMovie: {

  }
}

class MovieCharacter extends Model {
  static associate() {
    //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_CHARACTER_TABLE,
      modelName: 'Movie-Character',
      timestamps: false
    }
  }
}

module.exports = { MovieCharacter, MOVIE_CHARACTER_TABLE, MovieCharacterSchema }
