let Atividade = (sequelize, DataTypes) => {
    return sequelize.define(
        'Atividade',
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
                references: 'treinadores', // <<< Note, its table's name, not object name
                referencesKey: 'id' // <<< Note, its a column name
          },
            alunos_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: 'alunos', // <<< Note, its table's name, not object name
                referencesKey: 'id' // <<< Note, its a column name
            }
        },{
            tableName: "atividades",
            timestamps: false
        }

    );
}

module.exports = Atividade;