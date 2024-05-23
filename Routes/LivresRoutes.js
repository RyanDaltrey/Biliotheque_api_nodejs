const express = require ('express');
const LivresController = require ('../Controllers/LivresControllers');
const router = express.Router();

router.get('/', (req, res) => LivresController.getAllLivres(req,res));

module.exports = router;