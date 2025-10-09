module.exports = (sequelize, Sequelize) => {
    const Tienda = sequelize.define("tienda", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
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
        tableName: "tiendas",   // ✅ opciones del modelo
        timestamps: false       // ✅ opciones del modelo
    });
    return Tienda;
};
