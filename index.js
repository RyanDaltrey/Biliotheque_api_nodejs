const express = require('express');
const app = express();
const auteursRoutes = require ('./Routes/AuteursRoutes');
const livresRoutes = require ('./Routes/LivresRoutes');
const empruntsRoutes = require('./Routes/EmpruntsRoutes');
const emprunteursRoutes = require('./Routes/EmprunteursRoutes');
const authenticateRoutes = require('./Routes/AuthenticateRoutes');
// const AuthenticateController = require('./Controllers/AuthenticateControllers');

app.use(express.json());
app.use('/auteurs', auteursRoutes);
app.use('/livres',livresRoutes);
app.use('/emprunts', empruntsRoutes);
app.use('/emprunteurs', emprunteursRoutes );
app.use('/authenticate', authenticateRoutes)

module.exports = app;