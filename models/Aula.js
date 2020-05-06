let Aula = (sequelize, DataTypes) => {
    return sequelize.define(
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
            data_aula: {
                type: DataTypes.DATE,
                allowNull: true
            },
            observacoes: {
                type: DataTypes.STRING(45),
                allowNull: true
            }

        },{
            tableName: "aulas",
            timestamps: false
        }

    );
}

module.exports = Aula;