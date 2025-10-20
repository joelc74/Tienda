module.exports = app => {
  const proveedor = require("../controllers/proveedor.controller.js");
   var upload = require('../multer/upload.js');

  var router = require("express").Router();

  //Create a new Supplier
  router.post("/", upload.single('file'), proveedor.create);

  //Retrieve all Supplier
  router.get("/", proveedor.findAll);

  //Retrieve a single Supplier with id
  router.get("/:id", proveedor.findOne);

  //Update a Supplier with id
  router.put("/:id", proveedor.update);

  //Delete a Supplier with id
  router.delete("/:id", proveedor.delete);

  app.use('/api/proveedor', router);

};