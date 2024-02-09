import jwt from "jsonwebtoken";

function validateTokenMiddleware() {
    return (request, response, next) => {
        const { headers } = request;
        const authorization = headers['authorization'] ?? headers['Authorization'];

        if ( !authorization ) {
            return response.status(401).json({ error: 'Unauthorized' });
        }

        const token = authorization.split(' ')[1];

        if ( !token ) {
            return response.status(401).json({ error: 'Unauthorized' });
        }

        request.user = jwt.verify(token, process.env.JWT_SECRET);

        next();
    }
}

export default validateTokenMiddleware;