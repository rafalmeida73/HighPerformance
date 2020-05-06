let AulaHasAluno = (sequelize, DataTypes) => {
    return sequelize.define(
        'AulaHasAluno',
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
            }
        

        },{
            tableName: "aulas_has_alunos",
            timestamps: false
        }

    );
}

module.exports = AulaHasAluno;