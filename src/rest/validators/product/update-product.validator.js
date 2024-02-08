import Joi from "joi";

export const UpdateProductSchema = Joi.object({
    params: Joi.object({
        id: Joi.string().hex().length(24).required(),
    }),
    body: Joi.object({
        name: Joi.string(),
        description: Joi.string(),
        price: Joi.number(),
        quantity: Joi.number(),
        active: Joi.boolean(),
        category: Joi.string().hex().length(24),
    }),
});