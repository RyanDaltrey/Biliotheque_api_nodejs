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

async addAuteurs(request, result){
    try {
        const auteurs = await AuteursService.addAuteurs(request.body);
        result.json(auteurs);
    } catch (error) {
        result.status(500);
        result.json({error : "Une erreur est survenue lors de l'insersection de l'auteur"});
    }
}

async updateAuteurs(request, result){
    try {
        const auteur = await AuteursService.updateAuteurs(request.params.id , request.body);
        result.json(auteur);
    } catch (error) {
        result.status(500);
        result.json({ error : "Une erreur est survenue lors de la modification de l'auteur"})
    }
}

async removeAuteurs(request, result){
    try {
        await AuteursService.removeAuteurs(request.params.id);
        result.json({message : "L'auteur vient d'etre supprimé"});
    } catch (error) {
        result.status(500)
        result.json({ error : "Une erreur est survenue lors de la suppression de l'auteur"})
    }
}

}
module.exports = new AuteursController();