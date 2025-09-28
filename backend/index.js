const express = require("express");
const db = require("./models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Sincronizar BD
db.sequelize.sync().then(() => {
    console.log("Base de datos sincronizada");
}).catch(err => {
    console.error(" Error al sincronizar:",err);
});

//Ruta de raiz
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Store"});
});

//Importar las rutas de la Tienda
require("./routes/tienda.routes")(app);

//Servidor 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:${PORT}');
});