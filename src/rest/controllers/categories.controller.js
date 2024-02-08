// Services
import { CategoriesService } from "../../services/categories.service";

export class CategoriesController {
    constructor() {
        this.categoriesService = new CategoriesService();
    }
    async getCategoryById(request, response) {
        try {
            const { id } = request.params;
            const category = await this.categoriesService.getCategoryById(id);

            response.status(200).json(category);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async getCategories(request, response) {
        try {
            const categories = await this.categoriesService.getCategories();

            response.status(200).json(categories);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async createCategory(request, response) {
        try {
            const category = await this.categoriesService.createCategory(request.body);

            response.status(200).json(category);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async updateCategory(request, response) {
        try {
            const { id } = request.params;
            const category = await this.categoriesService.updateCategory(id,request.body);

            response.status(200).json(category);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
    async deleteCategory(request, response) {
        try {
            const { id } = request.params;
            const msg = await this.categoriesService.deleteCategory(id);

            response.status(200).send(msg);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
}