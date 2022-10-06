const Joi = require('joi');

id = Joi.number().integer();
image = Joi.string();
title = Joi.string().max(30);
creationDate = Joi.date();
Qualification = Joi.number().integer().min(1).max(5);
idCharacter = Joi.number().integer();

getCharacter = Joi.object({
  id: id.required()
})

createCharacter = Joi.object({
  image: image.required(),
  title: title.required(),
  creationDate: creationDate.required(),
  Qualification: Qualification.required(),
  idCharacter: idCharacter
})

updateCharacter = Joi.object({
  image: image,
  title: title,
  creationDate: creationDate,
  Qualification: Qualification,
  idCharacter: idCharacter,
})

DeleteCharacter = Joi.object({
  id: id.required()
})







