let AulaHasAluno = (sequelize, DataTypes) => {
    return sequelize.define(
        'AulaHasAluno',
        {
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

module.exports = AulaHasAluno;