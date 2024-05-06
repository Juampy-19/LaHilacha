module.exports = (sequelize, dataTypes) => {
    let alias = 'PrecioPizza';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        categoria_id: {
            type: dataTypes.INTEGER
        },
        tamaño_id: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.DECIMAL(10, 2)
        },
        pizza_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'precio_pizza',
        timestamps: false
    };
    const PrecioPizza = sequelize.define(alias, cols, config)

    PrecioPizza.associate = function(models) {
        PrecioPizza.belongsTo(models.Pizza, {
            as: 'Pizza',
            foreignKey: 'pizza_id'
        })

        PrecioPizza.belongsTo(models.CategoriaPizza, {
            as: 'CategoriaPizza',
            foreignKey: 'categoria_id'
        })

        PrecioPizza.belongsTo(models.TamañoPizza, {
            as: 'TamañoPizza',
            foreignKey: 'tamaño_id'
        })
    }

    return PrecioPizza
}