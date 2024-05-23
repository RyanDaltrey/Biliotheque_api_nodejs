const express = require ('express');
const LivresController = require ('../Controllers/LivresControllers');
const router = express.Router();

router.get('/', (req, res) => LivresController.getAllLivres(req,res));
router.get('/:id', (req, res) => LivresController.getLivresByID(req,res));
router.post('/', (req, res) => LivresController.addLivres(req,res));
router.patch('/:id', (req,res) => LivresController.updateLivres(req, res));
router.delete('/:id', (req, res) => LivresController.removeLivres(req,res));

module.exports = router;