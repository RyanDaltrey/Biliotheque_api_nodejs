const express = require('express');
const cors = require('cors');
const app = express();
const auteursRoutes = require ('./Routes/AuteursRoutes');
const livresRoutes = require ('./Routes/LivresRoutes');
const empruntsRoutes = require('./Routes/EmpruntsRoutes');
const emprunteursRoutes = require('./Routes/EmprunteursRoutes');
const authenticateRoutes = require('./Routes/AuthenticateRoutes');
const AuthenticateController = require('./Controllers/AuthenticateControllers');

app.use(express.json());
app.use(cors());
// app.use('/auteurs',AuthenticateController.authenticateToken, auteursRoutes);
// app.use('/livres', AuthenticateController.authenticateToken, livresRoutes);
app.use('/auteurs', auteursRoutes);
app.use('/livres', livresRoutes);
// app.use('/emprunts', AuthenticateController.authenticateToken,  empruntsRoutes);
// app.use('/emprunteurs', AuthenticateController.authenticateToken,  emprunteursRoutes );
app.use('/emprunteurs', emprunteursRoutes);
app.use('/emprunts', empruntsRoutes);
app.use('/auth', authenticateRoutes);

module.exports = app;
