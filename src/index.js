import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import { applyRoutes } from "./rest";
import { initializeRedisClient } from './rest/middlewares/redis.middleware';

async function bootstrap() {
    const app = express();

    await mongoose.connect(process.env.MONGODB_URL);
    await initializeRedisClient();

    applyRoutes(app);

    const port = process.env.PORT ?? 3000;
    await new Promise((resolve) => app.listen({ port }, resolve));

    console.log(`Server ready at http://localhost:${port}`);
}

bootstrap().catch(err => console.error(err));