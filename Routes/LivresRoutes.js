const express = require ('express');
const LivresController = require ('../Controllers/LivresControllers');
const router = express.Router();

router.get('/', (req, res) => LivresController.getAllLivres(req,res));
router.get('/:id', (req, res) => LivresController.getLivresByID(req,res));
router.post('/', (req, res) => LivresController.addLivres(req,res));
module.exports = router;