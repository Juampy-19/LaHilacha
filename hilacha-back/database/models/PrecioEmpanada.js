module.exports = (sequelize, dataTypes) => {
    let  alias = 'PrecioEmpanada';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria_id: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.DECIMAL(10, 2)
        }
    };
    let  config = {
        tableName: 'precio_empanada',
        timestamps: false
    };
    const PrecioEmpanada = sequelize.define(alias, cols,  config)

    PrecioEmpanada.associate = function(models) {
        PrecioEmpanada.belongsTo(models.CategoriaEmpanada, {
            as: 'CategoriaEmpanada',
            foreignKey: 'categoria_id'
        })
    }

    return PrecioEmpanada
}