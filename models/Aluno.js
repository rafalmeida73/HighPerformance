let Aluno = (sequelize, DataTypes) => {
    return sequelize.define(
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
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            treinadores_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: 'treinadores', // <<< Note, its table's name, not object name
                referencesKey: 'id' // <<< Note, its a column name
          }
        },{
            tableName: "alunos",
            timestamps: false
        }

    );
}

module.exports = Aluno;