module.exports = (sequelize, dataTypes) => {
    let alias = 'Pizza';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        sabor: {
            type: dataTypes.STRING
        },
        ingredientes: {
            type: dataTypes.STRING
        },
        categoria_id: {
            type: dataTypes.INTEGER
        },
        tamaño_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'pizzas',
        timestamps: false
    };
    const Pizza = sequelize.define(alias, cols, config)

    Pizza.associate = function(models) {
        Pizza.belongsTo(models.Product, {
            as: 'Product',
            foreignKey: 'producto_id'
        })

        Pizza.hasMany(models.CategoriaPizza, {
            as: 'CategoriaPizza',
            foreignKey: 'categoria_id'
        })

        Pizza.belongsTo(models.TamañoPizza, {
            as: 'TamañoPizza',
            foreignKey: 'tamaño_id'
        })

        Pizza.belongsTo(models.PrecioPizza, {
            as: 'PrecioPizza',
            foreignKey: 'precio_id'
        })
    }

    return Pizza
}