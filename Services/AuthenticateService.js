const Emprunteurs = require ('../Models/Emprunteurs');
const Config = require ('../Config/config.json');

class AuthenticateService{

    async register(emprunteursData){
        const emprunteurs = await Emprunteurs.create(emprunteursData);
        return this.generateToken(emprunteurs);
    }
}

module.exports = new AuthenticateService();