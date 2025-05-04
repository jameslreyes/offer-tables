import express from 'express';
import HealthRoutes from '@/routes/health';

const app = express();

app.use('/api/v1/health', HealthRoutes);

export default app;