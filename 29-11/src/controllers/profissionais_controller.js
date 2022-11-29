const con = require('../dao/dentistaDAO.js');
const Profissionais = require('../models/profissionais.js');

const listarGeral = (req, res) => {
    con.query(Profissionais.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listarProfissional = (req, res) => {
    con.query(Profissionais.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarGeral,
    listarProfissional
}