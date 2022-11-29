const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const profissionalR = require('./src/routes/profissionais_route.js');
const consultaR = require('./src/routes/consultas_route.js');
const tratamentoR = require('./src/routes/tratamentos_route.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(profissionalR);
app.use(consultaR);
app.use(tratamentoR);

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});