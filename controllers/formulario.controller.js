const Formulario = require("../models/formulario.model");
const { body, validationResult } = require("express-validator");

const mostrarFormulario = async (req, res) => {

  dados = Formulario.getFormulario(1);

  res.render("pages/formulario", {
    titulo: "Formulario",
    estilo: "formulario.css",
    dados
  });

}

module.exports = { mostrarFormulario }