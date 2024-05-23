const Emprunteurs = require ('../Models/Emprunteurs');

class EmprunteursService {
    async getAllEmprunteurs(){
        return await Emprunteurs.findAll();
    }

    async getEmprunteursByID(emprunteursID){
        return await Emprunteurs.findByPk(emprunteursID)
    }
}

module.exports = new EmprunteursService();