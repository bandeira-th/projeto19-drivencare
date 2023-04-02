import Joi from 'joi';

export const pacientSchema = Joi.object({
  name: Joi.string().min(3).required,
  email: Joi.string(6).email().required(), 
  password: Joi.string().min(5).required(),
  dateOfBirth: Joi.date().raw().required(),
})