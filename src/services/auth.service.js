// Models
import { User } from "../mongo/user";

// Instruments
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
    async loginUser(body) {
        const { email, password } = body;

        const user = await User.findOne({ email });

        if ( !user || !bcrypt.compareSync(password, user.password) ) {
            throw new Error('Invalid email or password.');
        }

        return jwt.sign({
            id: user._id.toString()
        }, process.env.JWT_SECRET, { expiresIn: '30d' });
    }
}