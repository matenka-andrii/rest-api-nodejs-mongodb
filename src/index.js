import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import { applyRoutes } from "./rest";

async function bootstrap() {
    const app = express();

    await mongoose.connect(process.env.MONGODB_URL);

    applyRoutes(app);

    const port = process.env.PORT ?? 3000;
    await new Promise((resolve) => app.listen({ port }, resolve));

    console.log(`Server ready at http://localhost:${port}`);
}

bootstrap().catch(err => console.error(err));