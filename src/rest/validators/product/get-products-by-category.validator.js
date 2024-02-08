import Joi from 'joi';

export const GetProductsByCategorySchema = Joi.object({
    params: Joi.object({
        categoryId: Joi.string().hex().length(24).required(),
    })
});