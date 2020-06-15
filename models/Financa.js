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
       mes: {
            type: DataTypes.STRING,
            allowNull: false
        },
       valor: {
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