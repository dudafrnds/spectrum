const Cliente = require("../models/lixo/cliente.model");
const Fatura = require("../models/lixo/fatura.model");
const { body, validationResult } = require("express-validator");
const Aluno = require("../models/aluno.model");

const acompanhamentoAlunos = async (req, res) => {
  dados = Aluno.getAlunos();

  res.render("pages/acompanhamento", {
    titulo: "acompanhamento",
    estilo: "acompanhamento.css",
    info: req.flash("info")[0],
    dados: dados,
  });
};

module.exports = { acompanhamentoAlunos };
