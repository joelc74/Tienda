const { where } = require("sequelize");
const db = require("../models");
const Tienda = db.tienda;
const Empleados = db.empleados;
const Op = db.Sequelize.Op;

//Create and Save a new Tienda
exports.create = (req, res) => {
 //Validate request
 if(!req.body.nombre || !req.body.empleadosId){
  res.status(400).send({
    message: "Content can not be empty!"
  });
  return;
 }

 Empleados.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email:req.body.email,
    telefono:req.body.telefono,
    empleadosId: req.body.empleadosId
 })
   .then(data => res.send(data))
   .catch(err => res.status(500).send({message: err.message}));
    };

 // Get all store
exports.findAll = (req, res) => {
    Empleados.findAll({ include: [Empleados]})
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}));
};

//Get Store by Id

exports.findOne = (req, res) => {
 const id= req.params.id;
 Empleados.findByPK(id, {include: [Empleados]})
  .then(data => {
    if(data) res.send(data);
    else res.status(404).send({message: 'No existe ningun empleado con id=${id}'});
  })
  .catch(err => res.status(500).send({message: err.message}));
};

//Update Store
exports.update= (req, res) => {
    const id= req.params.id;
    Empleados.update(req.body, {where:{id:id}})
    .then(num => {
        if(num == 1) res.send({message: "Empleado actualizado"});
        else res.send({message: 'No se puede actualizar el empleado con id= ${id}'});
    })
    .catch(err => res.status(500).send({message: err.message}));
};

//Delete Store
exports.delete = (req, res) => {
    const id = req.params.id;
    Empleados.destroy({ where: {id:id}})
    .then(num => {
        if(num == 1) res.send({message: "Empleado eliminado"});
        else res.send({message: 'No se pudo eliminar al empleado con id=${id}'});
    })
    .catch(err => res.status(500).send({message: err.message}));
};