const { where } = require("sequelize");
const db = require("../models");
const Tienda = db.tienda;
const Proveedores = db.proveedores;
const Op = db.Sequelize.Op;

//Create and Save a new Tienda
exports.create = (req, res) => {
 //Validate request
 if(!req.body.nombre || !req.body.proveedoresId){
  res.status(400).send({
    message: "Content can not be empty!"
  });
  return;
 }

 Proveedores.create({
    nombre: req.body.nombre,
    cif: req.body.cif,
    direccion: req.body.direccion,
    email:req.body.email,
    telefono:req.body.telefono,
    proveedoresId: req.body.proveedoresId
 })
   .then(data => res.send(data))
   .catch(err => res.status(500).send({message: err.message}));
    };

 // Get all store
exports.findAll = (req, res) => {
    Proveedores.findAll({ include: [Proveedores]})
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}));
};

//Get Store by Id

exports.findOne = (req, res) => {
 const id= req.params.id;
 Proveedores.findByPK(id, {include: [Proveedores]})
  .then(data => {
    if(data) res.send(data);
    else res.status(404).send({message: 'No existe proveedor con id=${id}'});
  })
  .catch(err => res.status(500).send({message: err.message}));
};

//Update Store
exports.update= (req, res) => {
    const id= req.params.id;
    Proveedores.update(req.body, {where:{id:id}})
    .then(num => {
        if(num == 1) res.send({message: "Proveedor actualizado"});
        else res.send({message: 'No se puede actualizar el proveedor con id= ${id}'});
    })
    .catch(err => res.status(500).send({message: err.message}));
};

//Delete Store
exports.delete = (req, res) => {
    const id = req.params.id;
    Proveedores.destroy({ where: {id:id}})
    .then(num => {
        if(num == 1) res.send({message: "Proveedor eliminado"});
        else res.send({message: 'No se pudo eliminar el proveedor con id=${id}'});
    })
    .catch(err => res.status(500).send({message: err.message}));
};
