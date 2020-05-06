let Treinador = (sequelize, DataTypes) => {
    let Treinador =  sequelize.define(
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

    return Treinador;
}

module.exports = Treinador;