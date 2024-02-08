import Joi from "joi";

export const CreateCategorySchema = Joi.object({
    body: Joi.object({
        name: Joi.string().required(),
    }),
});