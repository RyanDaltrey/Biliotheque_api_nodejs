const AuthenticateService = require('../Services/AuthenticateService');
const config = require('../Config/config.json');

class AuthenticateController{

    async register(request,result){
        try {
            const token = await AuthenticateService.register(request.body);
            result.json({token : token});
        } catch (error) {
            result.status(500)
            result.json({error : " Une erruer est survenu lors de l'inscription"});
        }
    }

    async login(request,result){
        try {
            const {email, mdp} = request.body;
            const token = await AuthenticateService.login(email, mdp);
            result.json({ token : token});
        } catch (error) {
            result.error(401)
            result.json({ error : "Mot de passe ou email incorrect"})
        }
    }
}

module.exports = new AuthenticateController();