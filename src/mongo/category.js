import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });

categorySchema.methods.toResponse = function toResponse() {
    return {
        id: this._id,
        name: this.name,
    };
};

export const Category = mongoose.model('Category', categorySchema);
