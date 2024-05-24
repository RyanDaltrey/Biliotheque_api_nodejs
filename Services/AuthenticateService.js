const Emprunteurs = require ('../Models/Emprunteurs');
const Config = require ('../Config/config.json');

class AuthenticateService{

    async register(emprunteursData){
        const emprunteurs = await Emprunteurs.create(emprunteursData);
        return this.generateToken(emprunteurs);
    }

    async login (email, mdp){
        const emprunteurs = await Emprunteurs.findOne({where : {empr_email : email}})
        if (!emprunteurs || !await emprunteurs.validatePassword(mdp)){
            throw new Error("Email ou mdp n'est pas correct")
        }
        return this.generateToken(emprunteurs);
    }
}

module.exports = new AuthenticateService();