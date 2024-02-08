// Core
import { Router } from "express";

// Controllers
import { CategoriesController } from "../controllers/categories.controller";

// Middlewares
import validationMiddleware from "../middlewares/validation.middleware";

// Validation schemas
import { CreateCategorySchema } from "../validators/category/create-category.validator";
import { DeleteCategorySchema } from "../validators/category/delete-category.validator";
import { GetCategoryByIdSchema } from "../validators/category/get-category-by-id.validator";
import { UpdateCategorySchema } from "../validators/category/update-category.validator";

const controller = new CategoriesController();
const router = new Router();

router.get(
    '/',
    (req, res) => controller.getCategories(req, res),
);
router.get(
    '/:id',
    validationMiddleware(GetCategoryByIdSchema),
    (req, res) => controller.getCategoryById(req, res),
);
router.post(
    '/',
    validationMiddleware(CreateCategorySchema),
    (req, res) => controller.createCategory(req, res),
);
router.put(
    '/:id',
    validationMiddleware(UpdateCategorySchema),
    (req, res) => controller.updateCategory(req, res),
);
router.delete(
    '/:id',
    validationMiddleware(DeleteCategorySchema),
    (req, res) => controller.deleteCategory(req, res),
);

export default router;