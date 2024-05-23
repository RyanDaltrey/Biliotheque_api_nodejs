const Livres = require ('../Models/Livres');

class LivresService{
    async getAllLivres(){
        return await Livres.findAll();
    }

    async getLivresByID(livresID){
        return await Livres.findByPk(livresID)
    }

    async AddLivres(livresdata){
        return await Livres.create(livresdata);
    }

    async updateLivres(livresID, livres){
        return await Livres.update(livres , {
            where : {li_id : livresID},
            individualHooks : true
        })
    }
    async removeLivres(livresID){
        return await Livres.destroy({
            where : {li_id : livresID}
        })
    }
}

module.exports = new LivresService();
