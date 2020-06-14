const Financa = (sequelize, DataTypes) => {
 const Financa = sequelize.define(
     'Financa',
     {
         id: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull:false
       },
       jane: {
             type: DataTypes.NUMBER,
       },
       feve: {
             type: DataTypes.NUMBER,
       },
       marc: {
             type: DataTypes.NUMBER,
       },
       abri: {
             type: DataTypes.NUMBER,
       },
       maio: {
             type: DataTypes.NUMBER,
       },
       junh: {
             type: DataTypes.NUMBER,
       },
       julh: {
             type: DataTypes.NUMBER,
       },
       agos: {
             type: DataTypes.NUMBER,
       },
       sete: {
             type: DataTypes.NUMBER,
       },
       outu: {
             type: DataTypes.NUMBER,
       },
       nove: {
             type: DataTypes.NUMBER,
       },
       deze: {
             type: DataTypes.NUMBER,
       },
       treinadores_id: {
           type: DataTypes.INTEGER,
           allowNull: true,
     }
        
     },{
         tableName: "financas",
         timestamps: false
     }

 );

 Financa.associate = (modelos) =>{
  Financa.belongsTo(modelos.Treinador, {foreignKey:'treinadores_id', as: 'treinador'})
 }


 return Financa;
}

module.exports = Financa;