module.exports = app => {
  const producto = require("../controllers/producto.controller.js");
   var upload = require('../multer/upload.js');

  var router = require("express").Router();

  //Create a new product
  router.post("/",upload.single('file'), producto.create);

  //Retrieve all product
  router.get("/", producto.findAll);

  //Retrieve a single product with id
  router.get("/:id", producto.findOne);

  //Update a product with id
  router.put("/:id", producto.update);

  //Delete a product with id
  router.delete("/:id", producto.delete);

  app.use('/api/producto', router);

};