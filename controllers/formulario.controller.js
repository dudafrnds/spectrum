const Cliente = require("../models/lixo/cliente.model");
const Fatura = require("../models/lixo/fatura.model");
const { body, validationResult } = require("express-validator");

const validarFormulario = [
    body("nome", "Email não pode estar vazio").notEmpty(),
    body("email", "Email não pode estar vazio").notEmpty(),
    body("telefone", "Telefone não pode estar vazio").notEmpty(),
    body("endereco", "Endereço não pode estar vazio").notEmpty(),
  ];