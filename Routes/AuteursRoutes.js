const express = require ('express');
const AuteursController = require('../Controllers/AuteursControllers');
const router = express.Router();

router.get('/', (req,res) => AuteursController.getAllAuteurs(req,res));
router.get('/:id', (req,res) => AuteursController.getAuteursByID(req,res));
router.post('/', (req, res) => AuteursController.addAuteurs(req,res));
router.patch('/:id', (req, res) => AuteursController.updateAuteurs(req,res));

module.exports = router;