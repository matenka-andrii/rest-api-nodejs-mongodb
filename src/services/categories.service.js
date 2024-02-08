// Models
import { Category } from "../mongo/category";
import { Product } from "../mongo/product";

export class CategoriesService {
    async getCategoryById(id) {
        const category = await Category.findById(id);

        if (!category) {
            throw new Error('Category not found.');
        }

        return category.toResponse();
    }
    async getCategories() {
        const categories = await Category.find();

        return categories.map(o => o.toResponse());
    }
    async createCategory(body) {
        const { name } = body;

        const existingCategory = await Category.findOne({
            name,
        });

        if ( existingCategory ) {
            throw new Error('Category already exists.');
        }

        const category = new Category({
            name,
        });

        await category.save();

        return category.toResponse();
    }
    async updateCategory(categoryId, body) {
        let category = await Category.findByIdAndUpdate(categoryId, body, { new: true });

        if ( !category ) {
            throw new Error('Category not found.');
        }

        await category.save();

        return category.toResponse();
    }
    async deleteCategory(categoryId) {
        const category = await Category.findById(categoryId);

        if ( !category ) {
            throw new Error('Category not found.');
        }

        const productsCount = await Product.countDocuments({ category: category._id });

        if( productsCount > 0 ) {
            throw new Error(`Category ${category.name} is being use in ${productsCount} product(s)`);
        }

        await Category.deleteOne({ _id: categoryId });

        return `Category has been deleted.`;
    }
}