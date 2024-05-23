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
}
module.exports = new EmpruntsController();