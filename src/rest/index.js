// Core
import bodyParser from 'body-parser';

// Routers
import productsRouter from "./routes/products.router";
import categoriesRouter from "./routes/categories.router";
import usersRouter from "./routes/users.router";
import authRouter from "./routes/auth.router";

export const applyRoutes = (app) => {
    app.use(bodyParser.json());
    app.use('/products', productsRouter);
    app.use('/categories', categoriesRouter);
    app.use('/users', usersRouter);
    app.use('/', authRouter);
};