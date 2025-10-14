const { where } = require("sequelize");
const db = require("../models");
const Empleado = db.empleado;
const Op = db.Sequelize.Op;

//Create and Save a new Employee
exports.create = (req, res) => {
  //Validate request
  if (!req.body.nombre || !req.body.apellido || !req.body.tipo_empleado || !req.body.email || !req.body.telefono) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  Empleado.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    tipo_empleado: req.body.tipo_empleado,
    email: req.body.email,
    telefono: req.body.telefono,

  })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Get all Employees
exports.findAll = (req, res) => {
  Empleado.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

//Get Employee by Id

exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("🟢 Buscando Empleado con id:", id);

  Empleado.findByPk(id)
    .then(data => {
      if (data) {
        console.log("Empleado encontrado:", data);
        res.send(data);
      } else {
        console.log("⚠️ No existe empleado con id:", id);
        res.status(404).send({ message: `No existe empleado con id=${id}` });
      }
    })
    .catch(err => {
      console.error("❌ Error al buscar empleado:", err);
      res.status(500).send({
        message: err.message || "Error al obtener empleado con id=" + id
      });
    });
};


//Update Employee
exports.update = (req, res) => {
  const id = req.params.id;
  Empleado.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Empleado actualizado" });
      else res.send({ message: `No se puede actualizar empleado con id=${id}` });

    })
    .catch(err => {
      console.error("❌ Error al buscar empleado:", err);
      res.status(500).send({
        message: err.message || "error al obtener empleado con id=" + id
      });
    });
};


//Delete Employee
exports.delete = (req, res) => {
  const id = req.params.id;
  Empleado.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Empleado eliminado" });
      else res.send({ message: 'No se pudo eliminar al empleado con id=${id}' });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};