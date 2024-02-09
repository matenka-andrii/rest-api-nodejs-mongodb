import Joi from "joi";

export const LoginUserSchema = Joi.object({
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
});