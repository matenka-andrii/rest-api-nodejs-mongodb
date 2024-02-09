// Services
import { UsersService } from "../../services/users.service";

export class UsersController {
    constructor() {
        this.usersService = new UsersService();
    }
    // @desc Sign up user
    // @route POST /users
    // @access Public
    async signUpUser(request, response) {
        try {
            const user = await this.usersService.signUpUser(request.body);

            response.status(200).json(user);
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
}