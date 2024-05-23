const express = require ('express');
const EmpruntsController = require('../Controllers/EmpruntsControllers');
const router = express.Router();

router.get('/' , (req,res) => EmpruntsController.getAllEmprunts(req,res));
router.get('/:id', (req,res) => EmpruntsController.getEmpruntsByID(req,res));

module.exports = router;