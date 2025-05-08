const { Pool } = require("pg");

// Função para verificar e criar o banco de dados "tests" se ele não existir.
async function ensureDatabase() {
  // Conecta ao banco padrão "postgres" para realizar a verificação.
  const defaultPool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: "postgres", // Banco padrão para operações administrativas
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_NUMBER
  });
  
  const client = await defaultPool.connect();
  const dbName = process.env.DB_NAME; // Espera-se que seja "tests"
  
  // Verifica se o banco de dados existe
  const result = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbName]);
  
  if (result.rowCount === 0) {
    console.log(`Banco de dados "${dbName}" não existe. Criando...`);
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`Banco de dados "${dbName}" criado com sucesso!`);
  } else {
    console.log(`Banco de dados "${dbName}" já existe.`);
  }
  
  client.release();
  await defaultPool.end();
}

// Função para verificar e criar a tabela "clientes" se ela não existir.
async function ensureTable() {
  // Conectando ao banco de dados "tests" (configurado em process.env.DB_NAME)
  const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_NUMBER
  });
  
  const client = await pool.connect();
  
  // Cria a tabela se ela não existir
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS clientes (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      idade INTEGER,
      uf CHAR(2)
    );
  `;
  await client.query(createTableQuery);
  
  console.log(`Tabela "clientes" verificada/criada com sucesso.`);
  
  client.release();
  await pool.end();
}

// Função de inicialização que executa as verificações de banco e tabela.
async function initializeDatabase() {
  await ensureDatabase();
  await ensureTable();
}

// Executa a inicialização ao iniciar a aplicação com "node index.js"
initializeDatabase().catch(error => {
  console.error("Erro durante a inicialização do banco de dados:", error);
});

// Função para conectar utilizando o padrão singleton.
async function connect() {
  // Se já houver uma conexão global, a retorna.
  if (global.connection)
    return global.connection.connect();

  const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    port: process.env.PORT_NUMBER
  });
  
  const client = await pool.connect();
  console.log("Connection pool created successfully!");
  const resdb = await client.query("SELECT now()");
  console.log(resdb.rows[0]);
  client.release();
  
  // Armazena o pool de conexões globalmente para reutilizá-lo.
  global.connection = pool;
  return pool.connect();
}

// Função para listar todos os clientes
async function selectCustomers() {
  const client = await connect();
  const res = await client.query("SELECT * FROM clientes");
  return res.rows;
}

// Função para listar um cliente específico
async function selectCustomer(id) {
  const client = await connect();
  const res = await client.query("SELECT * FROM clientes WHERE id=$1", [id]);
  return res.rows;
}

// Função para inserir um cliente
async function insertCustomer(customer) {
  const client = await connect();
  const sql = "INSERT INTO clientes(nome, idade, uf) VALUES ($1, $2, $3)";
  const values = [customer.nome, customer.idade, customer.uf];
  await client.query(sql, values);
}

// Função para atualizar um cliente
async function updateCustomer(id, customer) {
  const client = await connect();
  const sql = "UPDATE clientes SET nome=$1, idade=$2, uf=$3 WHERE id=$4";
  const values = [customer.nome, customer.idade, customer.uf, id];
  await client.query(sql, values);
}

// Função para excluir um cliente
async function deleteCustomer(id) {
  const client = await connect();
  const sql = "DELETE FROM clientes WHERE id=$1";
  const values = [id];
  await client.query(sql, values);
}

// Exporta as funções para que possam ser utilizadas no backend
module.exports = {
  selectCustomers,
  selectCustomer,
  insertCustomer,
  updateCustomer,
  deleteCustomer
};
