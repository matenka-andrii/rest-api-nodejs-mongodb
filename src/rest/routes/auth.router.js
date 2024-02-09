// Core
import { Router } from "express";

// Controllers
import { AuthController } from "../controllers/auth.controller";

// Middlewares
import validationMiddleware from "../middlewares/validation.middleware";

// Validation schemas
import { LoginUserSchema } from "../validators/auth/login-user.validator";

const controller = new AuthController();
const router = new Router();

router.post(
    '/login',
    validationMiddleware(LoginUserSchema),
    (req, res) => controller.loginUser(req, res),
);

export default router;