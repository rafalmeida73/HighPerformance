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
          }
        },{
            tableName: "alunos",
            timestamps: false
        }

    );

    Aluno.associate = (modelos) =>{
        Aluno.belongsToMany(modelos.Aula, {foreignKey:'aulas_id', as: 'aula', through: modelos.AulaHasAluno})
    }


    return Aluno;
}

module.exports = Aluno;