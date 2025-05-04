import express from 'express';
import HealthRoutes from '@routes/health.routes';

const app = express();

app.use('/api/v1/health', HealthRoutes);

export default app;