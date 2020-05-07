let Meta = (sequelize, DataTypes) => {
    const Meta =  sequelize.define(
        'Meta',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            alunos_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        

        },{
            tableName: "metas",
            timestamps: false
        }

       

    );

    Meta.associate = (modelos) =>{
        Meta.belongsTo(modelos.Aluno, {foreignKey:'alunos_id', as: 'aluno'})
    }



    return Meta;
}

module.exports = Meta;