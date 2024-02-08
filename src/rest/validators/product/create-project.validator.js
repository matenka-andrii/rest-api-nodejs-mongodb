import Joi from "joi";

export const CreateProjectSchema = Joi.object({
    body: Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
        price: Joi.number().required(),
        quantity: Joi.number(),
        active: Joi.boolean(),
        category: Joi.string().hex().length(24).required(),
    }),
});

// .messages({
//     'string.base': `"name" should be a type of 'text'`,
//     'string.empty': `"name" cannot be an empty field`,
//     'string.min': `"name" should have a minimum length of {#limit}`,
//     'any.required': `"name" is a required field`
// }),