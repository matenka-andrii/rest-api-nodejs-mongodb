// Services
import { AuthService } from "../../services/auth.service";

export class AuthController {
    constructor() {
        this.authService = new AuthService();
    }

    async loginUser(request, response) {
        try {
            const token = await this.authService.loginUser(request.body);

            response.status(200).json({ token });
        } catch (error) {
            console.error(error);

            response.status(500).json({ error: error.message });
        }
    }
}