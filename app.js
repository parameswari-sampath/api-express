// app.js
import express from 'express';
import authRoutes from './src/modules/auth/auth.routes.js';

const app = express();

// Global middlewares
app.use(express.json());

// Route registration
app.use('/api/auth', authRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'API is live!' });
});

export default app;
