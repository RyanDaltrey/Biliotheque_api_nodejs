const LivresService = require ('../Services/LivresService');

class LivresController{
    async getAllLivres(request, result){
        try {
            const livres = await LivresService.getAllLivres();
            result.json(livres)
        } catch (error) {
            result.status(500);
            result.json({ error : "Une erreur est survenue lors de la recuperation des livres."})
        }
    }
    async getLivresByID(request, result){
        try {
            const livres = await LivresService.getLivresByID(request.params.id);
            result.json(livres);
        } catch (error) {
            result.status(500);
            result.json({ error : "Une erreur est survenue lors de la recuperation du compte"})
        }
    }
    async addLivres(request, result){
        try { 
            const livres = await LivresService.AddLivres(request.body);
            result.json(livres);
        } catch (error) {
            result.status(500);
            result.json({ error : "Une erreur est survenue lors de l'ajout du livre."})
        }
    }
    async updateLivres(request, result){
        try {
            const livres = await LivresService.updateLivres(request.params.id, request.body);
            result.json(livres);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification du livre."})
        }
    }
    async removeLivres(request, result){
        try {
            await LivresService.removeLivres(request.params.id);
            result.json({message : "Le livre a bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la supression du livres."})
        }
    }

}
module.exports= new  LivresController();