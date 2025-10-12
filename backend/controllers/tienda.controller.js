const { where } = require("sequelize");
const db = require("../models");
const Tienda = db.tienda;
const Op = db.Sequelize.Op;

//Create and Save a new Tienda
exports.create = (req, res) => {
  //Validate request
  if (!req.body.nombre || !req.body.direccion || !req.body.email || !req.body.telefono) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  Tienda.create({
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    email: req.body.email,
    telefono: req.body.telefono,

  })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Get all store
exports.findAll = (req, res) => {
  Tienda.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

//Get Store by Id

// Get Store by Id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("🟢 Buscando tienda con id:", id);

  Tienda.findByPk(id)
    .then(data => {
      if (data) {
        console.log("📦 Tienda encontrada:", data);
        res.send(data);
      } else {
        console.log("⚠️ No existe tienda con id:", id);
        res.status(404).send({ message: `No existe tienda con id=${id}` });
      }
    })
    .catch(err => {
      console.error("❌ Error al buscar tienda:", err);
      res.status(500).send({
        message: err.message || "Error al obtener la tienda con id=" + id
      });
    });
};


//Update Store
exports.update = (req, res) => {
  const id = req.params.id;
  Tienda.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Tienda actualizada" });
     else res.send({message: `No se puede actualizar la tienda con id=${id}`});

    })
    .catch(err => {
      console.error("❌ Error al buscar tienda:", err);
      res.status(500).send({ 
        message: err.message || "error al obtener la tienda con id="+id
      });
    });
    };

  //Delete Store
  exports.delete = (req, res) => {
    const id = req.params.id;
    Tienda.destroy({ where: { id: id } })
      .then(num => {
        if (num == 1) res.send({ message: "Tienda eliminada" });
        else res.send({ message: `No se pudo eliminar la tienda con id=${id}` });
      })
      .catch(err => res.status(500).send({ message: err.message }));
  };





