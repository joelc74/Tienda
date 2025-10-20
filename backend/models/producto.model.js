module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        filename:{
            type: Sequelize.STRING,
        }
    }, {
        tableName: "productos",   // ✅ opciones del modelo
        timestamps: false       // ✅ opciones del modelo
    });
    return Producto;
};