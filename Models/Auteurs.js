const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../Config/Sequelize');

class Auteurs extends Model{

}

Auteurs.init({
    au_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    au_nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    au_prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    au_ddn : {
        type : DataTypes.DATE,
        allowNull : false
    },
    au_nationalite :{
        type : DataTypes.STRING,
        allowNull : false
    },
    image_url :{
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
    sequelize,
    modelName : 'Auteurs',
    tableName : 'auteurs',
    timestamps: false,
 
})
module.exports = Auteurs;