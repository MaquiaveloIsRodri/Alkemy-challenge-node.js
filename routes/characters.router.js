const express = require("express");
const router = express.Router();
const characterClass = require("../services/Character")

const character = new characterClass()

router.get('/', async (req, res) => {
  try {
    const characterFind = await character.characterList();
    res.json(characterFind);
  } catch (error) {
    console.log(error);
  }

})


module.exports = router;
