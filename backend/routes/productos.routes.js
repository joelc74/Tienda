module.exports = app => {
  const productos = require("../controllers/productos.controller.js");

  var router = require("express").Router();

  //Create a new employ
  router.post("/", productos.create);

  //Retrieve all employ
  router.get("/", productos.findAll);

  //Retrieve a single employ with id
  router.get("/:id", productos.findOne);

  //Update a employ with id
  router.put("/:id", productos.update);

  //Delete a employ with id
  router.delete("/:id", productos.delete);

  app.use('/api/tienda', router);

};