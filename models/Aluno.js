const Aluno = (sequelize, DataTypes) => {
    const Aluno = sequelize.define(
        'Aluno',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            treinadores_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
          }
        },{
            tableName: "alunos",
            timestamps: false
        }

    );

    Aluno.associate = (modelos) =>{
        Aluno.belongsTo(modelos.Treinador, {foreignKey:'treinadores_id', as: 'treinador'}),
        Aluno.belongsToMany(modelos.Aula, {foreignKey:'aulas_id', as: 'aula', through: modelos.AulaHasAluno})
    }


    return Aluno;
}

module.exports = Aluno;