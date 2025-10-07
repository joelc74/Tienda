module.exports = app => {
  const producto = require("../controllers/producto.controller.js");

  var router = require("express").Router();

  //Create a new employ
  router.post("/", producto.create);

  //Retrieve all employ
  router.get("/", producto.findAll);

  //Retrieve a single employ with id
  router.get("/:id", producto.findOne);

  //Update a employ with id
  router.put("/:id", producto.update);

  //Delete a employ with id
  router.delete("/:id", producto.delete);

  app.use('/api/producto', router);

};