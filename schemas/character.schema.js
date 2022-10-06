const Joi = require('joi');

id = Joi.number().integer();
image = Joi.string();
Name = Joi.string().max(30);
Age = Joi.number().integer();
Weight = Joi.number().integer();
history = Joi.string().min(10).max(280);
movieId = Joi.number().integer();

getCharacter = Joi.object({
  id: id.required()
})

createCharacter = Joi.object({
  image: image.required(),
  Name: Name.required(),
  Age: Age,
  Weight: Weight,
  history: history.required(),
  movieId: movieId.required()
})

updateCharacter = Joi.object({
  image: image,
  Name: Name,
  Age: Age,
  Weight: Weight,
  history: history,
  movieId: movieId
})

DeleteCharacter = Joi.object({
  id: id.required()
})







