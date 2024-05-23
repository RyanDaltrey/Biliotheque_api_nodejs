const express = require ('express');
const EmpruntsController = require('../Controllers/EmpruntsControllers');
const router = express.Router();

router.get('/' , (req,res) => EmpruntsController.getAllEmprunts(req,res));

module.exports = router;