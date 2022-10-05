const { Model, DataTypes, Sequelize } = require("sequelize");

const { MOVIE_TABLE } = require("./movie.model")
const { Character_TABLE } = require("./character.model")

const MOVIE_CHARACTER_TABLE = 'Movie-Character';
const MovieCharacterSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idCharacter: {
    field: 'character_id',
    allowNull: 'false',
    type: DataTypes.INTEGER,
    references: {
      model: Character_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idMovie: {
    field: 'id_movie',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: MOVIE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
      modelName: 'MovieCharacter',
      timestamps: false
    }
  }
}

module.exports = { MovieCharacter, MOVIE_CHARACTER_TABLE, MovieCharacterSchema }
