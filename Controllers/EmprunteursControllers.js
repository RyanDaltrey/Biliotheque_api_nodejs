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
}

module.exports = new EmprunteursController();