const Auteurs = require ('../Models/Auteurs');

class AuteursService {

    async getAllAuteurs(){
        return await Auteurs.findAll();
    }

    async getAuteursByID(auteursID){
        return await Auteurs.findByPk(auteursID)
    }
}
module.exports = new AuteursService();