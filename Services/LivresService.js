const Livres = require ('../Models/Livres');

class LivresService{
    async getAllLivres(){
        return await Livres.findAll();
    }

    async getLivresByID(livresID){
        return await Livres.findByPk(livresID)
    }
}

module.exports = new LivresService();
