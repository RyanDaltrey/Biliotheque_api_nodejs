const Auteurs = require ('../Models/Auteurs');

class AuteursService {

    async getAllAuteurs(){
        return await Auteurs.findAll();
    }

    async getAuteursByID(auteursID){
        return await Auteurs.findByPk(auteursID)
    }

    async addAuteurs(auteursdata){
        return await Auteurs.create(auteursdata);
    }

    async updateAuteurs(auteursID, auteurs){
        return await Auteurs.update(auteurs , {
            where : {au_id : auteursID},
            individualHooks : true
        })
    }
}
module.exports = new AuteursService();