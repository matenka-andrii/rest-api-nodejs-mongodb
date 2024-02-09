// Core
import { Router } from "express";

// Controllers
import { UsersController } from "../controllers/users.controller";

// Middlewares
import validationMiddleware from "../middlewares/validation.middleware";

// Validation schemas
import { SignUpUserSchema } from "../validators/users/sign-up-user.validator";

const controller = new UsersController();
const router = new Router();

router.post(
    '/',
    validationMiddleware(SignUpUserSchema),
    (req, res) => controller.signUpUser(req, res),
);


export default router;