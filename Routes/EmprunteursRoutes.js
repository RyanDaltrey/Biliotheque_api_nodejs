const express = require ('express');
const EmprunteursController = require ('../Controllers/EmprunteursControllers');
const router = express.Router();

router.get('/' , (req,res) => EmprunteursController.getAllEmprunteurs(req,res));
router.get('/:id' , (req,res) => EmprunteursController.getAllEmprunteursByID(req,res));
router.post('/', (req,res) => EmprunteursController.addEmprunteurs(req,res));
router.patch('/:id' , (req,res) => EmprunteursController.updateEmprunteurs(req,res));
router.delete('/:id' , (req,res) => EmprunteursController.removeEmprunteurs(req,res));

module.exports = router;