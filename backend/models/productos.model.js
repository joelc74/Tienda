module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Productos", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        precio_venta: {
            type: Sequelize.Float,
            allowNull: false
        },
        precio_compra: {
            type: Sequelize.Float,
            allowNull: false
        }
    }, {
        tableName: "productos",   // ✅ opciones del modelo
        timestamps: false       // ✅ opciones del modelo
    });
};