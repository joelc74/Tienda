module.exports = app => {
  const empleados = require("../controllers/empleados.controller.js");

  var router = require("express").Router();

  //Create a new employ
  router.post("/", empleados.create);

  //Retrieve all employ
  router.get("/", empleados.findAll);

  //Retrieve a single employ with id
  router.get("/:id", empleados.findOne);

  //Update a employ with id
  router.put("/:id", empleados.update);

  //Delete a employ with id
  router.delete("/:id", empleados.delete);

  app.use('/api/tienda', router);

};