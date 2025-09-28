module.exports = (sequelize, Sequelize) => {
    return sequelize.define("tienda", {
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
        }
    }, {
        tableName: "tiendas",   // ✅ opciones del modelo
        timestamps: false       // ✅ opciones del modelo
    });
};
