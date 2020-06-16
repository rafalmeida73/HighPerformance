let Aula = (sequelize, DataTypes) => {
    const Aula = sequelize.define(
        'Aula',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            observacoes: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            treinadores_id: {
                type: DataTypes.INTEGER,
                allowNull: true,

            },
            alunos_id: {
                type: DataTypes.INTEGER,
                allowNull: true,

            },
            data_aula: {
                type: Date(),
                allowNull: true
            },
            horario: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            status: {
                type: DataTypes.STRING(45),
                allowNull: true
            }

        },{
            tableName: "aulas",
            timestamps: false
        }

    );
    Aula.associate = (modelos) =>{
        Aula.belongsTo(modelos.Treinador, {foreignKey:'treinadores_id', as: 'treinador'}),
        Aula.belongsToMany(modelos.Aluno, {foreignKey:'alunos_id', as: 'aluno', through: modelos.AulaHasAluno})
    }

    return Aula;
}

module.exports = Aula;