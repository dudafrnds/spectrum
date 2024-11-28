const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index", {
      titulo: "Home",
      estilo: "home.css",
      info: req.flash("info")[0],
    });
  });

router.get("/formulario", (req, res) => {
    res.render("pages/formulario", {
        titulo: "Formulario",
        estilo: "formulario.css",
        info: req.flash("info")[0],
    });
});

router.get("/acompanhamento", (req, res) => {
    res.render("pages/acompanhamento", {
        titulo: "acompanhamento",
        estilo: "acompanhamento.css",
        info: req.flash("info")[0],
    });
});


router.get("/artigo", (req, res) => {
    res.render("pages/artigo", {
        titulo: "artigo",
        estilo: "artigo.css",
        info: req.flash("info")[0],
    });
})

router.get("/dicas", (req, res) => {
    res.render("pages/dicas", {
        titulo: "dicas",
        estilo: "dicas.css",
        info: req.flash("info")[0],
    });
})

router.get("/sobrenos", (req, res) => {
    res.render("pages/sobre2", {
        titulo: "Sobre nos",
        estilo: "sobre2.css",
        info: req.flash("info")[0],
    });
})

router.get("/cadastro", (req, res) => {
    res.render("pages/cadastro", {
        titulo: "cadastro",
        estilo: "cadastro.css",
        info: req.flash("info")[0],
    });
})

router.get("/login", (req, res) => {
    res.render("pages/login", {
        titulo: "login",
        estilo: "login.css",
        info: req.flash("info")[0],
    });
})

module.exports = router;