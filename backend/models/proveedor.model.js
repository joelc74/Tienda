module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
        },
        filename:{
            type: Sequelize.STRING,
        }
    }, {
        tableName: "proveedores",   // ✅ opciones del modelo
        timestamps: false       // ✅ opciones del modelo
    });
    return Proveedor;
};
