const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../Config/Sequelize');

class Livres extends Model{

}

Livres.init({

    li_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    li_titre: {
        type : DataTypes.STRING,
        allowNull : false
    },
    li_genre: {
        type : DataTypes.STRING,
        allowNull : false
    },
    li_datePublication: {
        type : DataTypes.DATE,
        allowNull: false
    },
    li_editeur: {
        type : DataTypes.STRING,
        allowNull : false
    },
    li_description: {
        type : DataTypes.STRING,
        allowNull: true
    },
    au_id : {
        type : DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Livres',
    tableName :'livres',
    timestamps: false,
})

module.exports = Livres;