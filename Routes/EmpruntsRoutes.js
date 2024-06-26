const express = require ('express');
const EmpruntsController = require('../Controllers/EmpruntsControllers');
const router = express.Router();

router.get('/' , (req,res) => EmpruntsController.getAllEmprunts(req,res));
router.get('/:id', (req,res) => EmpruntsController.getEmpruntsByID(req,res));
router.post('/', (req,res) => EmpruntsController.addEmprunts(req,res));
router.patch('/:id', (req,res) => EmpruntsController.updateEmprunts(req,res));
router.delete('/:id', (req,res) => EmpruntsController.removeEmprunts(req,res));

module.exports = router;