const { Character, CharacterSchema } = require("./character.model");

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize))
}

module.exports = setupModels;
