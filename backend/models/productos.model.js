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
      type: Sequelize.DECIMAL(10, 2), // hasta 10 dígitos con 2 decimales
      allowNull: false
    },
        precio_compra: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        }
    }, {
        tableName: "productos",   // ✅ opciones del modelo
        timestamps: false       // ✅ opciones del modelo
    });
};