// Core
import { Router } from "express";

// Controllers
import { ProductsController } from "../controllers/products.controller";

// Middlewares
import validationMiddleware from "../middlewares/validation.middleware";
import validateTokenMiddleware from "../middlewares/validate-token.middleware";

// Validation schemas
import { CreateProductSchema } from "../validators/product/create-product.validator";
import { GetProductByIdSchema } from "../validators/product/get-product-by-id.validator";
import { GetProductsByCategorySchema } from "../validators/product/get-products-by-category.validator";
import { UpdateProductSchema } from "../validators/product/update-product.validator";
import { DeleteProductSchema } from "../validators/product/delete-product.validator";

const controller = new ProductsController();
const router = new Router();

router.get(
    '/',
    validateTokenMiddleware(),
    (req, res) => controller.getProducts(req, res),
);
router.get(
    '/:id',
    validateTokenMiddleware(),
    validationMiddleware(GetProductByIdSchema),
    (req, res) => controller.getProductById(req, res),
);
router.get(
    '/category/:categoryId',
    validateTokenMiddleware(),
    validationMiddleware(GetProductsByCategorySchema),
    (req, res) => controller.getProductsByCategory(req, res),
);
router.post(
    '/',
    validateTokenMiddleware(),
    validationMiddleware(CreateProductSchema),
    (req, res) => controller.createProduct(req, res),
);
router.put(
    '/:id',
    validateTokenMiddleware(),
    validationMiddleware(UpdateProductSchema),
    (req, res) => controller.updateProduct(req, res),
);
router.delete(
    '/:id',
    validateTokenMiddleware(),
    validationMiddleware(DeleteProductSchema),
    (req, res) => controller.deleteProduct(req, res),
);

export default router;