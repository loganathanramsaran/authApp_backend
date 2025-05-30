const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const config = require('./config/config'); 
const authRoutes = require('./routes/authRoutes'); 
const userRoutes = require('./routes/userRoutes'); 

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = config.port;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  console.error('Internal Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

