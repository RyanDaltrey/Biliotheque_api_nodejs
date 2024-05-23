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

}
module.exports = new AuteursController();