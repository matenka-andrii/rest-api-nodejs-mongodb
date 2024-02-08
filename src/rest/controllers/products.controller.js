// Services
import { ProductsService } from "../../services/products.service";

export class ProductsController {
    constructor() {
        this.productsService = new ProductsService();
    }
    async getProductById(request, response) {
        try {
            const { id } = request.params;
            const product = await this.productsService.getProductById(id);

            response.status(200).json(product);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async getProductsByCategory(request, response) {
        try {
            const { categoryId } = request.params;
            const products = await this.productsService.getProductsByCategory(categoryId);

            response.status(200).json(products);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async getProducts(request, response) {
        try {
            const products = await this.productsService.getProducts();

            response.status(200).json(products);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async createProduct(request, response) {
        try {
            const product = await this.productsService.createProduct(request.body);

            response.status(200).json(product);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async updateProduct(request, response) {
        try {
            const { id } = request.params;
            const product = await this.productsService.updateProduct(id,request.body);

            response.status(200).json(product);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async deleteProduct(request, response) {
        try {
            const { id } = request.params;
            const msg = await this.productsService.deleteProduct(id);

            response.status(200).send(msg);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
}