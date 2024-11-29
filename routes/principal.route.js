const express = require("express");
const router = express.Router();

const { acompanhamentoAlunos } = require("../controllers/aluno.controller");
const { mostrarFormulario } = require("../controllers/formulario.controller");



router.get("/", (req, res) => {
  res.render("pages/index", {
    titulo: "Home",
    estilo: "home.css",
    info: req.flash("info")[0],
  });
});

router.get("/formulario", mostrarFormulario);

// router.get("/formulario", mostrarFormulario);


router.post("/formulario/:id?", (req, res) => {
  res.render("pages/formulario", {
    titulo: "Formulario",
    estilo: "formulario.css",
    info: req.flash("info")[0],
    id: req.params.id,
  });
});

router.get("/acompanhamento", acompanhamentoAlunos);

router.get("/artigo", (req, res) => {
  res.render("pages/artigo", {
    titulo: "artigo",
    estilo: "dicas.css",
    info: req.flash("info")[0],
  });
});

router.get("/dicas", (req, res) => {
  res.render("pages/dicas", {
    titulo: "dicas",
    estilo: "dicas.css",
    info: req.flash("info")[0],
  });
});

router.get("/sobrenos", (req, res) => {
  res.render("pages/sobre2", {
    titulo: "Sobre nos",
    estilo: "sobre2.css",
    info: req.flash("info")[0],
  });
});

router.get("/cadastro", (req, res) => {
  res.render("pages/cadastro", {
    titulo: "cadastro",
    estilo: "cadastro.css",
    info: req.flash("info")[0],
  });
});

router.get("/login", (req, res) => {
  res.render("pages/login", {
    titulo: "login",
    estilo: "login.css",
    info: req.flash("info")[0],
  });
});

module.exports = router;
