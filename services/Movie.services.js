class movies {
  constructor() { }

  async createMovies(data) {
    const newMovies = await models.Movies.create(data);
    return newMovies;
  }

  async moviesList() {
    const rta = models.Movies.findAll()
    return rta;
  }

  async imageNameMovies() {
    const moviesList = this.moviesList();
    const rtaNameMovies = await moviesList.map(item = () => {
      const image = item.image;
      const title = item.title;
      const creationDate = item.creationDate;
      return { image, title, creationDate }
    })
    return rtaNameMovies
  }

  async findOneMovies(id) {
    const rta = models.Movies.findByPk(id, {
      include: ['MovieCharacter']
    })
    if (!rta) {
      throw boom.notFound('Movie not found');
    }
    return rta;
  }

  async updateMovies(id, changes) {
    const movies = this.findOneCharacter(id);
    const rtaMovies = await movies.update(changes);
    return rtaMovies;
  }

  async deleteMovies(id) {
    const movies = this.findOneMovies(id);
    await movies.destroy();
    return id
  }


}

module.exports = Character;
