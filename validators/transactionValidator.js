import Joi from "joi";

const transactionSchema = Joi.object({
  userId: Joi.number().integer().required().messages({
    "number.base": "userId must be a number",
    "number.integer": "userId must be an integer",
    "any.required": "userId is required",
  }),

  buyerName: Joi.string().min(1).required().messages({
    "string.base": "buyerName must be a string",
    "string.empty": "buyerName is required",
    "any.required": "buyerName is required",
  }),

  total: Joi.number().positive().required().messages({
    "number.base": "total must be a number",
    "number.positive": "total must be a positive number",
    "any.required": "total is required",
  }),

  menus: Joi.array()
    .items(
      Joi.object({
        menuId: Joi.number().integer().required().messages({
          "number.base": "menuId must be a number",
          "number.integer": "menuId must be an integer",
          "any.required": "menuId is required",
        }),
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
        qty: Joi.number().integer().positive().required().messages({
          "number.base": "qty must be a number",
          "number.integer": "qty must be an integer",
          "number.positive": "qty must be a positive number",
          "any.required": "qty is required",
        }),
      })
    )
    .min(1)
    .required()
    .messages({
      "array.base": "menus must be an array",
      "array.min": "menus must contain at least one item",
      "any.required": "menus is required",
    }),
});

export { transactionSchema };
