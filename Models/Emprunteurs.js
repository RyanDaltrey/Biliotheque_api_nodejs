const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../Config/Sequelize');
const bcrypt = require('bcrypt');

class Emprunteurs extends Model{

}

Emprunteurs.init({
    empr_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empr_nom: {
        type : DataTypes.STRING,
        allowNull : false
    },
    empr_prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    empr_telephone : {
        type : DataTypes.CHAR,
        length : 10,
        allowNull : true
    },
    empr_email : {
        type : DataTypes.STRING,
        allowNull : true
    },
    empr_mdp : {
        type : DataTypes.STRING,
        allowNull : false
    },
    empr_dateDebut : {
        type : DataTypes.DATE,
        allowNull: false
    },
    empr_dateFin : {
        type : DataTypes.DATE,
        allowNull: false
    }

},{
    sequelize,
    modelName : 'Emprunteurs',
    tableName : 'emprunteurs',
    timestamps: false,
    hooks : {
        beforeCreate : async (emprunteur) => {
            emprunteur.empr_mdp = await bcrypt.hash(emprunteur.empr_mdp, 10);
        },
        beforeUpdate : async (emprunteur) => {
            console.log(emprunteur);
            if (emprunteur.changed('empr_mdp')){
                emprunteur.empr_mdp = await bcrypt.hash(emprunteur.empr_mdp, 10)
            }
        }
    }
})
module.exports = Emprunteurs;