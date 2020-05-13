let Presenca = (sequelize, DataTypes) => {
    const Presenca =  sequelize.define(
        'Presenca',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            aulas_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            alunos_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        

        },{
            tableName: "presenca",
            timestamps: false
        }

       

    );

    Presenca.associate = (modelos) =>{
        Presenca.belongsTo(modelos.Aluno, {foreignKey:'alunos_id', as: 'aluno'}),
        Presenca.belongsTo(modelos.Aula, {foreignKey:'aulas_id', as: 'aula'})
    }



    return Presenca;
}

module.exports = Presenca;