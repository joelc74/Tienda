module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Empleados", {
         nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
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
