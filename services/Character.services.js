const { models } = require("../libs/sequelize");
const boom = require("boom");
const { string, number } = require("joi");

class Character {
  constructor() { }

  async createCharacterMovie(data) {
    const newCharacter = await models.MovieCharacter.create(data);
    return newCharacter;
  }

  async characterList() {
    const rta = models.Character.findAll({
      include: ['MainCharacter']
    })
    return rta;
  }

  async imageNameCharacter() {
    const listCharacter = models.Character.findAll({
      attributes: [
        'id',
        'Image',
        'Name'
      ]
    })
    return listCharacter;
  }

  async searchCharacter(data) {
    if (typeof (data) != string) {
      const charactersAge = models.Character.findAll({
        include: ['MainCharacter'],
        where: {
          age: age
        }
      })
      return charactersAge
    }

    if (typeof (data) != number) {
      const charactersName = models.Character.findAll({
        include: ['MainCharacter'],
        where: {
          name: data
        }
      })
      return charactersName
    }

    if (typeof (data) != string && typeof (data) != number) {
      boom.badRequest('Parameter is not fount')
    }
  }

  async searchIdMovie(idMovie) {
    const charactersMovie = models.Character.findAll({
      include: ['MainCharacter'],
      where: {
        idMovie: idMovie
      }
    })
    if (!charactersMovie) {
      boom.badRequest('Parameter is not fount')
    }
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
