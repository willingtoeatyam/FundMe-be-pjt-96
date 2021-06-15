const express = require('express');
require('dotenv').config();
const { PORT } = process.env; //get sensitive info from .env file
const dbSetup = require('./database/setup');

//require routes
const authRoutes = require('./routes/authRoutes')

const app = express();

//initialise database
dbSetup();

app.use(express.json());

app.use('/auth', authRoutes);

app.listen(PORT || 4000, ()=> { console.log('Server is running') });