const express = require('express');
const router = express.Router();

const Tratamento = require("../controllers/tratamentos_controller");

//No caso tem que haver as funções de listagem, cadastro, alteração e exclusão, CRUD completo
router.get("/tratamentos/read", Tratamento.listarTratamento);
router.post("/tratamentos/create", Tratamento.cadastrarTratamento);
router.put("/tratamentos/update", Tratamento.alterarTratamento);
router.delete("/tratamentos/delete/:id_trata", Tratamento.excluirTratamento);

module.exports = router;