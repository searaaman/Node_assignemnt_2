import express from 'express';
import courtRoutes from './routes/courtRoutes.js';

const app = express();

app.disable('x-powered-by'); 

app.use(express.json());
app.use(express.json());

// Routes
app.use('/api/courts', courtRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`------------------------------------`);
  console.log(`SERVER RUNNING ON: http://localhost:${PORT}/api/courts`);
  console.log(`------------------------------------`);
});