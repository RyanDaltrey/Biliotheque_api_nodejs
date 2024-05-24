const express = require('express');
const app = express();
const auteursRoutes = require ('./Routes/AuteursRoutes');
const livresRoutes = require ('./Routes/LivresRoutes');
const empruntsRoutes = require('./Routes/EmpruntsRoutes');
const emprunteursRoutes = require('./Routes/EmprunteursRoutes');
const authenticateRoutes = require('./Routes/AuthenticateRoutes');
const AuthenticateController = require('./Controllers/AuthenticateControllers');

app.use(express.json());
app.use('/auteurs',AuthenticateController.authenticateToken, auteursRoutes);
app.use('/livres', AuthenticateController.authenticateToken, livresRoutes);
app.use('/emprunts', AuthenticateController.authenticateToken,  empruntsRoutes);
app.use('/emprunteurs', AuthenticateController.authenticateToken,  emprunteursRoutes );
app.use('/auth', authenticateRoutes)

module.exports = app;