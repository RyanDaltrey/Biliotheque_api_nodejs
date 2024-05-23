const Emprunteurs = require ('../Models/Emprunteurs');

class EmprunteursService {
    async getAllEmprunteurs(){
        return await Emprunteurs.findAll();
    }
}

module.exports = new EmprunteursService();