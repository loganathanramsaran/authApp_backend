const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const config = require('./config/config'); 
const authRoutes = require('./routes/authRoutes'); 
const userRoutes = require('./routes/userRoutes'); 
const swaggerUi = require('swagger-ui-express'); 
const swaggerDocument = require('./swagger.json'); //documentation

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = config.port;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});

