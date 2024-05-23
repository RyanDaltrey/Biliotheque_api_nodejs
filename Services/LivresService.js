const Livres = require ('../Models/Livres');

class LivresService{
    async getAllLivres(){
        return await Livres.findAll();
    }
}

module.exports = new LivresService();
