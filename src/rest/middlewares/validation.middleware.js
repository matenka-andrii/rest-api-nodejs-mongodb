function validationMiddleware(schema) {
    return (request, response, next) => {
        const { error } = schema.validate(request, {
            stripUnknown: true,
        });

        if (error) {
            return response.status(500).json({ error: error.details.map(err => err.message) });
        }

        next();
    };
}

export default validationMiddleware;