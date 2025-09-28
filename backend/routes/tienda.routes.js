module.exports = app => {
  const tienda = require("../controllers/tienda.controller.js");

  var router = require("express").Router();

  //Create a new Store
  router.post("/", tienda.create);

  //Retrieve all Store
  router.get("/", tienda.findAll);

  //Retrieve a single Store with id
  router.get("/:id", tienda.findOne);

  //Update a Store with id
  router.put("/:id", tienda.update);

  //Delete a Store with id
  router.delete("/:id", tienda.delete);

  app.use('/api/tienda', router);

};