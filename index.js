const express = require('express');
const app = express();
const auteursRoutes = require ('./Routes/AuteursRoutes');
const livresRoutes = require ('./Routes/LivresRoutes');
const empruntsRoutes = require('./Routes/EmpruntsRoutes');

app.use(express.json());
app.use('/auteurs', auteursRoutes);
app.use('/livres',livresRoutes);
app.use('/emprunts', empruntsRoutes);

module.exports = app;