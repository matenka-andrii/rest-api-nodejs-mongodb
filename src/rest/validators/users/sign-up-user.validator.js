import Joi from "joi";

export const SignUpUserSchema = Joi.object({
    body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
});