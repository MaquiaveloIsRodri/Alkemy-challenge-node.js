const express = require("express");
const validationHandler = require("../middlewares/Validation.handler");
const { getCharacter, createCharacter, updateCharacter, DeleteCharacter } = require('../schemas/character.schema')
const router = express.Router();
const characterClass = require("../services/Character");


const character = new characterClass()

router.get('/characters', async (req, res, next) => {
  try {
    const characterName = await character.imageNameCharacter();
    res.json(characterName);
  } catch (error) {
    next(error);
  }
});

router.get('/characters/details', async (req, res, next) => {
  try {
    const characterDetail = await character.characterList();
    res.json(characterDetail);
  } catch (error) {
    next(error)
  }
});

router.get('/character',
  validationHandler(),
  async (req, res, next) => {
    try {
      const name = req.query.name
      const findName = character.searchCharacter(name);
      res.json(findName);
    } catch (error) {
      next(error)
    }
  }
)

router.get('/character',
  validationHandler(),
  async (req, res, next) => {
    try {
      const age = req.query.age;
      const findAge = character.searchCharacter(age);
      res.json(findAge);
    } catch (error) {
      next(error);
    }
  }
)

router.get('/character',
  validationHandler(),
  async (req, res, next) => {
    try {
      const movies = req.query.movies;
      const findAge = character.searchIdMovie(movies);
      res.json(findAge);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/character',
  validationHandler(createCharacter, 'body')
  , async (req, res, next) => {
    try {
      const body = req.body;
      const newCharacter = await character.createCharacterMovie(body);
      res.json(newCharacter);
    } catch (error) {
      next(error)
    }
  });

router.put('/character/:id',
  validationHandler(getCharacter, 'params'),
  validationHandler(updateCharacter, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const newUpdateCharacter = await character.updateCharacter(id, body);
      res.json(newUpdateCharacter)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/character/:id',
  validationHandler(getCharacter, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await character.deleteCharacter(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
)


module.exports = router;
