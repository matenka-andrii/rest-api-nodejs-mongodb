// Models
import { User } from "../mongo/user";

// Instruments
import bcrypt from 'bcrypt';

export class UsersService {
    async signUpUser(body) {
        const { firstName, lastName, email, password } = body;

        // Password validation
        if ( password.length < 8 || !/^[a-zA-Z0-9]+$/.test(password) ) {
            throw new Error('Password must be at least 8 characters long and contain only letters and numbers.');
        }

        // Email validation
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('Email already exists.');
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await user.save();

        return user.toResponse();
    }
}