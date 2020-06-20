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
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            meta: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            metaFeita: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
            },
                treinadores_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
            },
            valor: {
                type: DataTypes.DECIMAL,
                allowNull: true,
            },
        },{
            tableName: "alunos",
            timestamps: false
        }

    );

    Aluno.associate = (modelos) =>{
        Aluno.belongsTo(modelos.Treinador, {foreignKey:'treinadores_id', as: 'treinador'}),
        Aluno.belongsToMany(modelos.Aula, {through: 'AulaHasAluno', as: 'aula', foreignKey:'aulas_id'})
    }


    return Aluno;
}

module.exports = Aluno;