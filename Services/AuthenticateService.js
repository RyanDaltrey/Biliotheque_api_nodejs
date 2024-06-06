const jwt = require ("jsonwebtoken")
const config = require ('../Config/config.json');
const Emprunteurs = require ('../Models/Emprunteurs');

class AuthenticateService{

    async register(emprunteursData){
        console.log(emprunteursData)
        const emprunteur = await Emprunteurs.create(emprunteursData);
        return emprunteur
        // return this.generateToken(emprunteurs);
    }

    async login (email, mdp){
        const emprunteurs = await Emprunteurs.findOne({ where : {empr_email : email}})
        if (!emprunteurs || !await emprunteurs.validatePassword(mdp)){
            throw new Error("Email ou mdp n'est pas correct")
        }
        return this.generateToken(emprunteurs);
    }

    generateToken(emprunteurs){
        const payload = {
            id: emprunteurs.empr_id,
            email: emprunteurs.empr_email       
    }
        return jwt.sign(
            payload,
            config.SECRET,
            {expiresIn: '1h'}
        )
    }
}

module.exports = new AuthenticateService();