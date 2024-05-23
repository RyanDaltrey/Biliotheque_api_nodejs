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
}
module.exports = new EmpruntsController();