const { models } = require("../libs/sequelize")

class CharacterMovie {
  async createCharacterMovie(data) {
    const newCharacter = await models.MovieCharacter.create(data);
    return newCharacter;
  }
}
