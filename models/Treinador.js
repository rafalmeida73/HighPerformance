let Treinador = (sequelize, DataTypes) => {
    return sequelize.define(
        'Treinador',
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
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING,
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tableName: "treinadores",
            timestamps: false
        }

    );
}

module.exports = Treinador;