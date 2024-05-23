const AuteursService = require('../Services/AuteursService');

class AuteursController{
async getAllAuteurs(request,result){
    try {
        const auteurs = await AuteursService.getAllAuteurs();
        result.json(auteurs)
        
    } catch (error) {
        result.status(500);
        result.json({error : "Une erreur est survenue lors de la recuperation des auteurs."})
    }
}

async getAuteursByID(request,result){
    try {
        const auteur = await AuteursService.getAuteursByID(request.params.id);
        result.json(auteur);
    } catch (error) {
        result.status(500);
        result.json({error : "Une erreur est survenue lors de la recuperation de l'auteur"});
    }
}

}
module.exports = new AuteursController();