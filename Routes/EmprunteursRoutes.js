const express = require ('express');
const EmprunteursController = require ('../Controllers/EmprunteursControllers');
const router = express.Router();

router.get('/' , (req,res) => EmprunteursController.getAllEmprunteurs(req,res));

module.exports = router;