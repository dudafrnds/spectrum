const http = require("http");
const porta = 3000;
const express = require("express");
const app = express();
const morgan = require("morgan");
const principalRoutes = require("./routes/principal.route");
const modulosRoutes = require("./routes/modulos.route");
const session = require("express-session"); // Middleware usado para autenticacao
const flash = require("connect-flash"); // deve ser chamada depois de express-session.
// const dashboardRoutes = require("./routes/dashboard.route");

//middlewares
const { verificarUserLogado } = require("./libs/middleware");

// configurações iniciais
app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(flash());

require("dotenv").config();
require("./libs/dbConnect");

//configuracao de sessão (express session)
app.use(
  session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
  })
);

app.use("/", principalRoutes);
app.use("/modulos", modulosRoutes);

app.get("*", (req, res) => {
  res.status(404).render("index", {
    mensagem: "Erro 404 - Rota nao encontrada",
    estilo: "home.css",
    titulo: "Rota nao encontrada",
  });
  console.log("rota nao encontrada");
});

// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
