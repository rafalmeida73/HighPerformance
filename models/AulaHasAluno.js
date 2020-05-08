let AulaHasAluno = (sequelize, DataTypes) => {
    AulaHasAluno =  sequelize.define(
        'AulaHasAluno',
        {
            aulas_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            alunos_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        

        },{
            tableName: "aulas_has_alunos",
            timestamps: false
        }

        

    );

    AulaHasAluno.associate = (modelos) =>{
        AulaHasAluno.belongsTo(modelos.Aluno, {foreignKey:'alunos_id', as: 'aluno'}),
        AulaHasAluno.belongsTo(modelos.Aula, {foreignKey:'aulas_id', as: 'aula'})
    }

    return AulaHasAluno;
}

module.exports = AulaHasAluno;