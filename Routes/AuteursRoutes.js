const express = require ('express');
const AuteursController = require('../Controllers/AuteursControllers');
const router = express.Router();

router.get('/', (req,res) => AuteursController.getAllAuteurs(req,res));

module.exports = router;