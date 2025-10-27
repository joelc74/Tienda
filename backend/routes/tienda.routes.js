module.exports = app => {
  const tienda = require("../controllers/tienda.controller.js");
  var upload = require('../multer/upload.js');

  var router = require("express").Router();

  //Create a new Store
  router.post("/", upload.single('file'), tienda.create);

  //Retrieve all Store
  router.get("/", tienda.findAll);

  //Retrieve a single Store with id
  router.get("/:id", tienda.findOne);

  //Update a Store with id
  router.put("/:id", upload.single('file'), tienda.update);

  //Delete a Store with id
  router.delete("/:id", tienda.deleteStore);

  app.use('/api/tienda', router);

};