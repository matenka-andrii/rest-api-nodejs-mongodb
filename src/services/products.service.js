// Models
import { Product } from "../mongo/product";
import { Category } from "../mongo/category";

export class ProductsService {
    async getProductById(id) {
        const product = await Product.findById(id).populate('category');

        if (!product) {
            throw new Error('Product not found.');
        }

        return product.toResponse();
    }
    async getProductsByCategory(categoryId) {
        const existingCategory = await Category.findById(categoryId);

        if ( !existingCategory ) {
            throw new Error('Category not found.');
        }

        const products = await Product.find({ category: categoryId }).populate('category');

        return products.map(o => o.toResponse());
    }
    async getProducts() {
        const products = await Product.find().populate('category');

        return products.map(o => o.toResponse());
    }
    async createProduct(body) {
        const { name, description, quantity, active, price, category } = body;

        const existingCategory = await Category.findById(category);

        if ( !existingCategory ) {
            throw new Error('Category not found.');
        }

        const product = new Product({
            name,
            description,
            quantity,
            active,
            price,
            category,
        });

        await product.save();

        return product.toResponse();
    }
    async updateProduct(productId, body) {
        const { category } = body;

        const existingCategory = await Category.findById(category);

        if ( category && !existingCategory ) {
            throw new Error('Category not found.');
        }

        const product = await Product.findByIdAndUpdate(productId, body, { new: true }).populate('category');

        if ( !product ) {
            throw new Error('Product not found.');
        }

        await product.save();

        return product.toResponse();
    }
    async deleteProduct(productId) {
        let product = await Product.findById(productId);

        if ( !product ) {
            throw new Error('Product not found.');
        }

        await Product.deleteOne({ _id: productId });

        return `Product has been deleted.`;
    }
}