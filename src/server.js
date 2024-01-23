
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth_routes');
const cors = require('cors'); 
const helmet = require('helmet');
const app = express();

app.use(cors());  // Use CORS middleware without any restrictions
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use(helmet());

module.exports = app;

