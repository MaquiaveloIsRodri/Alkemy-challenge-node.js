'use strict';

const { CharacterSchema, Character_TABLE } = require('./../model/character.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(Character_TABLE, CharacterSchema);
  },

  async down(queryInterface) {
    await queryInterface.drop(Character_TABLE);
  }
};
