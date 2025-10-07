module.exports = app => {
  const empleado = require("../controllers/empleado.controller.js");

  var router = require("express").Router();

  //Create a new employ
  router.post("/", empleado.create);

  //Retrieve all employ
  router.get("/", empleado.findAll);

  //Retrieve a single employ with id
  router.get("/:id", empleado.findOne);

  //Update a employ with id
  router.put("/:id", empleado.update);

  //Delete a employ with id
  router.delete("/:id", empleado.delete);

  app.use('/api/empleado', router);

};