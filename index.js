const express = require('express');
const app = express();
const auteursRoutes = require ('./Routes/AuteursRoutes');

app.use(express.json());
app.use('/auteurs', auteursRoutes);

module.exports = app;