let Depoimento = (sequelize, DataTypes) => {
    let Depoimento =  sequelize.define(
        'Depoimento',
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
            profissao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mensagem: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tableName: "depoimentos",
            timestamps: false
        }

    );

    return Depoimento;
}

module.exports = Depoimento;