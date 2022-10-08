const Joi = require('joi');

id = Joi.number().integer();
image = Joi.string();
Name = Joi.string().max(30);
Age = Joi.number().integer();
Weight = Joi.number().integer();
history = Joi.string().min(10).max(280);
MainCharacter = Joi.number().integer();

getCharacter = Joi.object({
  id: id.required()
})

getCharacterName = Joi.object({
  Name: Name.required()
})

getCharacterAge = Joi.object({
  Age: Age.required()
})

getCharacterIdMovie = Joi.object({
  MainCharacter: MainCharacter.required()
})

createCharacter = Joi.object({
  image: image.required(),
  Name: Name.required(),
  Age: Age,
  Weight: Weight,
  history: history.required(),
  MainCharacter: MainCharacter.required()
})

updateCharacter = Joi.object({
  image: image,
  Name: Name,
  Age: Age,
  Weight: Weight,
  history: history,
  MainCharacter: MainCharacter
})


module.exports = { getCharacter, createCharacter, updateCharacter, getCharacterName, getCharacterAge, getCharacterIdMovie };




