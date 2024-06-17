require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const plantRoutes = require('./routes/plant-routes');

const app = express();
const PORT = parseInt(process.env.PORT) || 3001;

app.use(express.json());

app.use('/api', plantRoutes);

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }
};
