const { models } = require("../libs/sequelize")

class Character {
  constructor() { }
  async characterList() {
    const rta = models.Character.findAll()
    return rta;
  }
}

module.exports = Character;
