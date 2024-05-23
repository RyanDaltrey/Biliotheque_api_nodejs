const express = require('express');
const app = express();
const auteursRoutes = require ('./Routes/AuteursRoutes');
const livresRoutes = require ('./Routes/LivresRoutes');

app.use(express.json());
app.use('/auteurs', auteursRoutes);
app.use('/livres',livresRoutes);

module.exports = app;