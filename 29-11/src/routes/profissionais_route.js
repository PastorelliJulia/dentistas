const express = require('express');
const router = express.Router();

const Profissionais = require("../controllers/profissionais_controller");

// Registro das consultas e tratamentos por profissional
router.get("/profissionais/read", Profissionais.listarGeral);
router.get("/profissionais/read/:id_prof", Profissionais.listarProfissional);

module.exports = router;