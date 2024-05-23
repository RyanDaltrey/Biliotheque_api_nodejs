const EmpruntsService = require ('../Services/EmpruntsService');

class EmpruntsController{

    async getAllEmprunts(request,result){
        try {
            const emprunts = await EmpruntsService.getAllEmprunts();
            result.json(emprunts);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la recuperation des emprunts."})
        }
    }

    async getEmpruntsByID(request,result){
        try { const emprunts = await EmpruntsService.getEmpruntsByID(request.params.id);
            result.json(emprunts);
        } catch (error) {
            result.status(500);
            result.json({ error : "Une erreur est survenue lors de la recuperaton d'emprunt."})
        }
    }
    
    async addEmprunts(request, result){
        try {
            const emprunts = await EmpruntsService.addEmprunts(request.body);
            result.json(emprunts);
        } catch (error) {
            result.status(500);
            result.json({ error : "Une erreur est survenue lors de l'ajour de l'emprunt."})
        }
    }

    async updateEmprunts(request, result){
        try {
            const emprunts = await EmpruntsService.updateEmprunts(request.params.id , request.body);
            result.json(emprunts);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de l'emprunt."})
        }
    }

    async removeEmprunts(request, result){
        try {
            await EmpruntsService.removeEmprunts(request.params.id);
            result.json({message : "Votre emprunt a bien été supprimé"});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la supression de l'emprunt."})
        }
    }
}
module.exports = new EmpruntsController();