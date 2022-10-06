const { models } = require("../libs/sequelize");
const boom = require("boom");

class Character {
  constructor() { }

  async characterList() {
    const rta = models.Character.findAll()
    return rta;
  }

  async imageNameCharacter() {
    const characterList = this.characterList();
    const rtaNameCharacter = await characterList.map(item = () => {
      const name = item.name;
      const image = item.image;
      return { name, image }
    })
    return rtaNameCharacter
  }

  async findOneCharacter(id) {
    const rta = models.Character.findByPk(id, {
      include: ['MovieCharacter']
    })
    if (!rta) {
      throw boom.notFound('Character not found');
    }
    return rta;
  }

  async searchCharacterName(name) {
    const charactersName = models.Character.findAll({
      where: {
        name: name
      }
    })
    return charactersName
  }

  async searchCharacterAge(age) {
    const charactersAge = models.Character.findAll({
      where: {
        age: age
      }
    })
    return charactersAge
  }

  async searchIdMovie(idMovie) {
    const charactersMovie = models.Character.findAll({
      include: ['MainCharacter'],
      where: {
        idMovie: idMovie
      }
    })
    return charactersMovie
  }

  async updateCharacter(id, changes) {
    const character = this.findOneCharacter(id);
    const rtaUpdate = await character.update(changes);
    return rtaUpdate;
  }

  async deleteCharacter(id) {
    const character = this.findOneCharacter(id);
    await character.destroy();
    return id
  }


}

module.exports = Character;
