const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../Config/Sequelize');

class Emprunts extends Model{

}

Emprunts.init({
    emp_id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emp_dateDebut : {
        type : DataTypes.DATE,
        allowNull : false
    },
    emp_dateFin : {
        type : DataTypes.DATE,
        allowNull : false
    },
    emp_quantite : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    li_id : {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    empr_id : {
        type : DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Emprunts',
    tableName : 'emprunts',
    timestamps: false
})
module.exports = Emprunts;