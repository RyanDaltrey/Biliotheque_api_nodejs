const EmprunteursService = require ('../Services/EmprunteursService');

class EmprunteursController{
    async getAllEmprunteurs(request, result){
        try {
            const emprunteurs = await EmprunteursService.getAllEmprunteurs();
            result.json(emprunteurs);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la recuperation des emprunteurs."})
        }
    }

    async getAllEmprunteursByID(request, result){
        try {
            const emprunteurs = await EmprunteursService.getEmprunteursByID(request.params.id);
            result.json(emprunteurs);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la recuperation des emprunteurs."})
        }
    }

    async addEmprunteurs(request,result){
        try {
            const emprunteurs = await EmprunteursService.addEmprunteurs(request.body);
            result.json(emprunteurs);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout d'emprunteur."})
        }
    }
    async updateEmprunteurs(request, result){
        try {
            const emprunteurs = await EmprunteursService.updateEmprunteurs(request.params.id , request.body);
            result.json(emprunteurs);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de d'emprunteur"})
                
            }
        }
    
}

module.exports = new EmprunteursController();