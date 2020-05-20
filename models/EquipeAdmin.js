let EquipeAdmin = (sequelize, DataTypes) => {
    return sequelize.define('EquipeAdmin',
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
            funcao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            site: {
                type: DataTypes.STRING,
                allowNull: false
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING,
            },
            img: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tableName: "equipe_admin",
            timestamps: false
        }

    );
    
}

module.exports = EquipeAdmin;