const { models } = require("../libs/sequelize")

class Character {
  constructor() { }
  async createCharacter(data) {
    const newCharacter = await models.Character.create(data);
    return newCharacter;
  }

  async characterList() {
    const rta = models.Character.findAll()
    return rta;
  }
}

module.exports = Character;
