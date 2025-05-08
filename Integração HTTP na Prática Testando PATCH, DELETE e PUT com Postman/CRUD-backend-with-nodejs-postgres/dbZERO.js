async function connect() {
    const { Pool } = require("pg");

     // Quando eu chamar a função connect novamente, verificarei se já tenho uma global.connection carregada. Se houver, simplesmente a retornarei.
     // Essa estratégia é chamada de singleton. Ela impede que você recrie objetos completamente o tempo todo.
    if(global.connection)
        return global.connection.connect();

    // Connexão "Pool" é uma estratégia de conexão onde o banco de dados abre algumas conexões e sempre que a gente precisa de uma nova conexão o banco pega nova conexão 
    // no Pool de conexões já abertos. Se tiver conexão ociosa, é essa que será entregue. Se tiver que criar uma nova conexão, a conexão é criada e se tiver que fechar 
    // a conexão, a conexão é fechada.
    // Resumindo: O pool de conexões é usado para gerenciar de forma eficiente o acesso ao banco de dados. Em vez de abrir e fechar uma conexão a cada requisição — o que pode ser custoso em termos de desempenho — o pool mantém um conjunto de conexões abertas que podem ser reutilizadas conforme a demanda da aplicação. Isso resulta em: Melhor desempenho, Uso otimizado dos recursos, Gerenciamento de erros e Escalabilidade
    const pool = new Pool({
        user: process.env.USER_NAME,
        host: process.env.HOST_NAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        port: process.env.PORT_NUMBER
    })
    

    const client = await pool.connect(); // Conectandooo
    console.log("Connection pool created successfully!")

    const resdb = await client.query("SELECT now()");
    console.log(resdb.rows[0]); // Tomando a primeira posição do array de onde virá o tempo do banco de dados.
    client.release()

  // Podemos salvar nosso pool em uma conexão global. Então podemos executar o "if" como no início deste arquivo
    global.connection = pool;

    return pool.connect()
}

connect(); // Lembrando/Lembrete: temos que carregar/importar o arquivo db.js no nosso back-end index.js.


// Função para listar clientes
async function selectCustomers() {
    // Estabelecer conexão
    const client = await connect();

    // Enviar comando sql para o banco de dados
    const res = await client.query("SELECT * FROM clientes");

    return res.rows;
}

// Função para listar um cliente
async function selectCustomer(id) {
    // Estabelecer conexão
    const client = await connect();

    // Envia comando sql para o banco de dados
    // const res = await client.query("SELECT * FROM clientes WHERE ID=" +id); // Isso pode causar injeção de SQL
    const res = await client.query("SELECT * FROM clientes WHERE ID=$1", [id]); // Declaração preparada ou consulta preparada

    return res.rows;
}

// Função para inserir clientes
async function insertCustomer(customer) {
   // Estabelecer conexão
    const client = await connect();
    // query
    // Obs.: O "id" é incremental. Não precisa ser passado
    const sql = "INSERT INTO clientes(nome, idade, uf) VALUES ($1, $2, $3)";
    // parâmetros que devem ser injetados na consulta
    const values = [customer.nome, customer.idade, customer.uf];
    // não tem retorno
    await client.query(sql, values)
}

// Função para editar/atualizar clientes
async function updateCustomer(id, customer) {
    // Estabelecer conexão
    const client = await connect();
    // query
    const sql = "UPDATE clientes SET nome=$1, idade=$2, uf=$3 WHERE id=$4";
    // parâmetros que devem ser injetados na consulta
    const values = [customer.nome, customer.idade, customer.uf, id];
    // não tem retorno
    await client.query(sql, values);
}

// Função para excluir clientes
async function deleteCustomer(id) {
   // Estabelecer conexão
    const client = await connect();
    // parâmetros que devem ser injetados na consulta
    const sql = "DELETE FROM clientes WHERE id=$1";
    const values = [id];
    // não tem retorno
    await client.query(sql, values)
}

// Exportando cada função para que a gente consiga as usar no nosso backend!!!
module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}