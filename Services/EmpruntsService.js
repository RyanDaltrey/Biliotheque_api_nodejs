const Emprunts = require ('../Models/Emprunts');

class EmpruntsService{
    async getAllEmprunts(){
        return await Emprunts.findAll();
    }
}

module.exports = new EmpruntsService();