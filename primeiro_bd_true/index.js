require ('dotenv').config()

const db = require("./db");

const port = process.env.PORT;

const express = require('express');

const app = express();

app.listen(port)

console.log(`Servidor rodando na porta ${port} =)`)






// async function executarConsulta() {
//   const pool = await connect();
//   const resultado = await pool.query('SELECT * FROM clientes');
//   console.log(resultado.rows);
// }

// async function iniciarAplicacao(){

//     try {
//         console.log('Iniciando aplicação')
//         const dados = await executarConsulta()
        
//     } catch (error) {
//         console.error(`Erro na aplicação: ${error}`)
//     }

// }

// iniciarAplicacao()