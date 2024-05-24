const express = require ('express');
const AuthenticateController = require ('../Controllers/AuthenticateControllers');
const router = express.Router();

router.post('/register' , (req,res) => AuthenticateController.register(req,res));
router.post('/login' , (req, res ) => AuthenticateController.login(req,res));

module.exports = router;