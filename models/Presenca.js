let Presenca = (sequelize, DataTypes) => {
    return sequelize.define(
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
}

module.exports = Presenca;