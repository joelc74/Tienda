const { where } = require("sequelize");
const db = require("../models");
const Tienda = db.tienda;
const Proveedor = db.proveedor;
const Op = db.Sequelize.Op;

//Create and Save a new Supplier
exports.create = (req, res) => {
  //Validate request
  if (!req.body.nombre || !req.body.cif || !req.body.direccion || !req.body.email || !req.body.telefono) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  Proveedor.create({
    nombre: req.body.nombre,
    cif: req.body.cif,
    direccion: req.body.direccion,
    email: req.body.email,
    telefono: req.body.telefono,
     filename: req.file ? req.file.filename : ""

  })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Get all Suppliers
exports.findAll = (req, res) => {
  Proveedor.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

//Get Suppliers by Id

exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("🟢 Buscando Proveedor con id:", id);

  Proveedor.findByPk(id)
    .then(data => {
      if (data) {
        console.log("📦 Proveedor encontrado:", data);
        res.send(data);
      } else {
        console.log("⚠️ No existe proveedor con id:", id);
        res.status(404).send({ message: `No existe proveedor con id=${id}` });
      }
    })
    .catch(err => {
      console.error("❌ Error al buscar proveedor:", err);
      res.status(500).send({
        message: err.message || "Error al obtener el proveedor con id=" + id
      });
    });
};


//Update Suppliers
exports.update = (req, res) => {
  const id = req.params.id;
  Proveedor.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Proveedor actualizado" });
      else res.send({ message: `No se puede actualizar el proveedor con id=${id}` });

    })
    .catch(err => {
      console.error("❌ Error al buscar proveedor:", err);
      res.status(500).send({
        message: err.message || "error al obtener proveedor con id=" + id
      });
    });
};


//Delete Suppliers
exports.delete = (req, res) => {
  const id = req.params.id;
  Proveedor.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Proveedor eliminado" });
      else res.send({ message: 'No se pudo eliminar el proveedor con id=${id}' });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
