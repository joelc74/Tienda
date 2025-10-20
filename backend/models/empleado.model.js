module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
        },
        filename:{
            type: Sequelize.STRING,
        }
    }, {
        tableName: "empleados",  // ✅ OPCIONES
        timestamps: false                // ✅ OPCIONES
    });
    return Empleado;
};
