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
}

module.exports = new LivresService();
