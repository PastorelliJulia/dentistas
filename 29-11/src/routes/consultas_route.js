//route = rota || direção pra algo
const express = require('express');
const router = express.Router();

const Consulta = require("../controllers/consulta_controller");

//nesse caso a única função é a listagem das consultas
router.get("/consultas/read", Consulta.listarConsulta);

module.exports = router;