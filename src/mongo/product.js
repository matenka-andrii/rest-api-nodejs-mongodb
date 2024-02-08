import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    active: {
        type: Boolean,
        default: true,
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
        required: true,
    }
}, { timestamps: true });

productSchema.methods.toResponse = function toResponse() {
    let response = {
        id: this._id,
        name: this.name,
        description: this.description,
        price: this.price,
        quantity: this.quantity,
        active: this.active,
    };

    if (this.populated('category')) {
        response.category = {
            id: this.category._id,
            name: this.category.name,
        };
    } else {
        response.category = this.category;
    }
    return response;
};

export const Product = mongoose.model('Product', productSchema);
