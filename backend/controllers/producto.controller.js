const { where } = require("sequelize");
const db = require("../models");
const Producto = db.producto;
const Op = db.Sequelize.Op;

//Create and Save a new Product
exports.create = (req, res) => {
 //Validate request
 if(!req.body.nombre || !req.body.descripcion || !req.body.precio_venta || !req.body.precio_compra){
  res.status(400).send({
    message: "Content can not be empty!"
  });
  return;
 }

 Producto.create({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio_venta:req.body.precio_venta,
    precio_compra:req.body.precio_compra,
    
 })
   .then(data => res.send(data))
   .catch(err => res.status(500).send({message: err.message}));
    };

 // Get all product
exports.findAll = (req, res) => {
    Producto.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}));
};

//Get product by Id

exports.findOne = (req, res) => {
 const id= req.params.id;
 Producto.findByPK(id)
  .then(data => {
    if(data) res.send(data);
    else res.status(404).send({message: 'No existe tienda con id=${id}'});
  })
  .catch(err => res.status(500).send({message: err.message}));
};

//Update Product
exports.update= (req, res) => {
    const id= req.params.id;
    Producto.update(req.body, {where:{id:id}})
    .then(num => {
        if(num == 1) res.send({message: "Producto actualizado"});
        else res.send({message: 'No se puede actualizar el producto con id= ${id}'});
    })
    .catch(err => res.status(500).send({message: err.message}));
};

//Delete Product
exports.delete = (req, res) => {
    const id = req.params.id;
    Producto.destroy({ where: {id:id}})
    .then(num => {
        if(num == 1) res.send({message: "Producto eliminado"});
        else res.send({message: 'No se pudo eliminar el producto con id=${id}'});
    })
    .catch(err => res.status(500).send({message: err.message}));
};





