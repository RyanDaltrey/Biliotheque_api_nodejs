const Emprunteurs = require ('../Models/Emprunteurs');

class EmprunteursService {
    async getAllEmprunteurs(){
        return await Emprunteurs.findAll();
    }

    async getEmprunteursByID(emprunteursID){
        return await Emprunteurs.findByPk(emprunteursID)
    }

    async addEmprunteurs(emprunteursdata){
        return await Emprunteurs.create(emprunteursdata);
    }

    async updateEmprunteurs(emprunteursID, emprunteurs){
        return await Emprunteurs.update(emprunteurs , {
            where : {empr_id : emprunteursID},
            individualHooks : true
        })
    }

    async removeEmprunteurs(emprunteursID){
        return await Emprunteurs.destroy({
            where : {empr_id : emprunteursID}
        })
    }
}

module.exports = new EmprunteursService();