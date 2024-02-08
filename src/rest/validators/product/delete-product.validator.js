import Joi from "joi";

export const DeleteProductSchema = Joi.object({
    params: Joi.object({
        id: Joi.string().hex().length(24).required(),
    }),
});