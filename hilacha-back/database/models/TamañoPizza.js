module.exports = (sequelize, dataTypes) => {
    let alias = 'TamañoPizza';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tamaño: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'tamaño_pizza',
        timestamps: false
    };
    const TamañoPizza = sequelize.define(alias, cols, config)

    TamañoPizza.associate = function(models) {
        TamañoPizza.hasMany(models.Pizza, {
            as: 'Pizza',
            foreignKey: 'tamaño_id'
        })

        TamañoPizza.hasMany(models.PrecioPizza, {
            as: 'PrecioPizza',
            foreignKey: 'tamaño_id'
        })
    }

    return  TamañoPizza
}