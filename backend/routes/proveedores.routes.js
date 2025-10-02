module.exports = app => {
  const proveedores = require("../controllers/proveedores.controller.js");

  var router = require("express").Router();

  //Create a new Supplier
  router.post("/", proveedores.create);

  //Retrieve all Supplier
  router.get("/", proveedores.findAll);

  //Retrieve a single Supplier with id
  router.get("/:id", proveedores.findOne);

  //Update a Supplier with id
  router.put("/:id", proveedores.update);

  //Delete a Supplier with id
  router.delete("/:id", proveedores.delete);

  app.use('/api/tienda', router);

};