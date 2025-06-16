import Joi from "joi";

export const menuSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "name must be a string",
    "string.empty": "name is required",
    "any.required": "name is required",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "price must be a number",
    "number.positive": "price must be a positive number",
    "any.required": "price is required",
  }),
  category: Joi.string().required().messages({
    "string.base": "category must be a string",
    "string.empty": "category is required",
    "any.required": "category is required",
  }),
});
