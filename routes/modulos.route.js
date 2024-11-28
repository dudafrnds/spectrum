const express = require("express");
const router = express.Router();
const { getAlunos } = require("../controllers/aluno.controller");

router.get("/modulo1", (req, res) => {
  res.render("pages/professor", {
    titulo: "professor",
    estilo: "professor.css",
    info: req.flash("info")[0],
  });
});

router.get("/alfabetizacao", (req, res) => {
  res.render("pages/alfabetizacao", {
    titulo: "alfabetizacao",
    estilo: "alfabe.css",
    info: req.flash("info")[0],
  });
});

router.get("/adolescente", (req, res) => {
  res.render("pages/adolescente", {
    titulo: "adolescente",
    estilo: "adole.css",
    info: req.flash("info")[0],
  });
});

router.get("/trabalho", (req, res) => {
  res.render("pages/trabalho", {
    titulo: "trabalho",
    estilo: "trabalho.css",
    info: req.flash("info")[0],
  });
});

router.get("/comunica", (req, res) => {
  res.render("pages/comunica", {
    titulo: "comunica",
    estilo: "comunica.css",
    info: req.flash("info")[0],
  });
});

router.get("/inclusao", (req, res) => {
  res.render("pages/inclusao", {
    titulo: "inclusao",
    estilo: "inclusao.css",
    info: req.flash("info")[0],
  });
});

router.get("/direitos", (req, res) => {
  res.render("pages/direitos", {
    titulo: "direitos",
    estilo: "inclusao.css",
    info: req.flash("info")[0],
  });
});

router.get("/graus", (req, res) => {
  res.render("pages/graus", {
    titulo: "graus",
    estilo: "graus.css",
    info: req.flash("info")[0],
  });
});

module.exports = router;
