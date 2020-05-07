let Contato = (sequelize, DataTypes) => {
    let Contato =  sequelize.define(
        'Contato',
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
            docs: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mensagem: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tableName: "contatos",
            timestamps: false
        }

    );

    return Contato;
}

module.exports = Contato;