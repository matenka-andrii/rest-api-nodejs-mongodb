import Joi from "joi";

export const UpdateCategorySchema = Joi.object({
    params: Joi.object({
        id: Joi.string().hex().length(24).required(),
    }),
    body: Joi.object({
        name: Joi.string(),
    }),
});