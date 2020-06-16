let Mensalidade = (sequelize, DataTypes) => {
    const Mensalidade = sequelize.define(
        'Mensalidade',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            mes_ref: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            valor: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            alunos_id: {
                type: DataTypes.INTEGER,
                allowNull: true,

            },
            treinadores_id: {
                type: DataTypes.INTEGER,
                allowNull: true,

            },
            status:{
                type: DataTypes.STRING(10),
                allowNull: false
            }

        },{
            tableName: "mensalidades",
            timestamps: false
        }

    );
    Mensalidade.associate = (modelos) =>{
        Mensalidade.belongsTo(modelos.Treinador, {foreignKey:'treinadores_id', as: 'treinador'}),
        Mensalidade.belongsTo(modelos.Aluno, {foreignKey:'alunos_id', as: 'aluno'})
    }

    return Mensalidade;
}

module.exports = Mensalidade;