//! as instalações express é o framework, pg é o postgres(banco de dado) e dotenv é a porta

require("dotenv").config();

const db = require('./db')
const port = process.env.PORT;
const express = require('express');
const app = express();


app.get('/', (req,res) => {

    res.json({
        message:"Funcionando!"
    })

})


app.listen(port);
console.log('Servidor rodando na porta 3000! :D')