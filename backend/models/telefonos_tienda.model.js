module.exports = (sequelize, Sequelize) => {
    return sequelize.define("telefonos_tienda", {
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: "telefonos_tiendas",  // ✅ OPCIONES
        timestamps: false                // ✅ OPCIONES
    });
};
