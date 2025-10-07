module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Empleado", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo_empleado: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: "empleados",  // ✅ OPCIONES
        timestamps: false                // ✅ OPCIONES
    });
};
