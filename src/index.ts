import express from 'express';
import courtRoutes from './routes/courtRoutes.js'; 

const app = express();
app.use(express.json());

// Routes
app.use('/api/courts', courtRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log('------------------------------------');
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
  console.log(`Link: http://localhost:${PORT}/api/courts`);
  console.log('------------------------------------');
});