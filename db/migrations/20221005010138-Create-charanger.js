'use strict';

const { CharacterSchema, Character_TABLE } = require('./../model/character.model');
const { MovieSchema, MOVIE_TABLE } = require('./../model/movie.model');
const { GenderSchema, GENDER_TABLE } = require('./../model/gender.model');
const { MovieCharacterSchema, MOVIE_CHARACTER_TABLE } = require('./../model/character-movie.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(Character_TABLE, CharacterSchema);
    await queryInterface.createTable(MovieSchema, MOVIE_TABLE);
    await queryInterface.createTable(GenderSchema, GENDER_TABLE);
    await queryInterface.createTable(MovieCharacterSchema, MOVIE_CHARACTER_TABLE);
  },

  async down(queryInterface) {
    await queryInterface.drop(Character_TABLE);
    await queryInterface.drop(MOVIE_TABLE);
    await queryInterface.drop(GENDER_TABLE);
    await queryInterface.drop(MOVIE_CHARACTER_TABLE);
  }
};
