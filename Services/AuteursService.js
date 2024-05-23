const Auteurs = require ('../Models/Auteurs');

class AuteursService {

    async getAllAuteurs(){
        return await Auteurs.findAll();
    }
}
module.exports = new AuteursService();