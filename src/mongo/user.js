import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
}, { timestamps: true });

userSchema.methods.toResponse = function toResponse() {
    return {
        id: this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
    };
};

export const User = mongoose.model('User', userSchema);
