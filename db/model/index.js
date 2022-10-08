const { Character, CharacterSchema } = require("./character.model");
const { Movie, MovieSchema } = require("./movie.model")
const { Gender, GenderSchema } = require('./gender.model')
const { MovieCharacter, MovieCharacterSchema } = require('./character-movie.model')


function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  MovieCharacter.init(MovieCharacterSchema, MovieCharacter.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));

  Gender.associate(sequelize.models);
  Character.associate(sequelize.models);
  Movie.associate(sequelize.models);
}

module.exports = setupModels;
