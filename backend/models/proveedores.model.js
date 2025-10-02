module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Proveedores", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
           cif: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        direccion: {
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
        tableName: "proveedores",   // ✅ opciones del modelo
        timestamps: false       // ✅ opciones del modelo
    });
};
