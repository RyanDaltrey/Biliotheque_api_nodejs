const Emprunts = require ('../Models/Emprunts');

class EmpruntsService{
    async getAllEmprunts(){
        return await Emprunts.findAll();
    }

    async getEmpruntsByID(empruntsID){
        return await Emprunts.findByPk(empruntsID)
    }

    async addEmprunts(empruntsdata){
        return await Emprunts.create(empruntsdata)
    }

    async updateEmprunts(empruntsID, emprunts){
        return await Emprunts.update(emprunts, {
            where : { emp_id : empruntsID},
            individualHooks: true
        })
    }
}


module.exports = new EmpruntsService();