async function connect(){//? função assincrona, que permite que várias operações sejam executadas simultaneamente sem bloquear a execução de outras tarefas

    if(global.connection)

        return global.connection.connect();
    
    const { Pool } = require('pg');
    const pool = new Pool ({
        connectionString:process.env.CONNECTION_STRING
    });
    const cliente = await pool.connect();
    console.log('Foi criado o pool de conexão');
    
    const res = await cliente.query('select now()')
    console.log(res.rows[0])
    cliente.release()

    global.connect = pool
    return pool.connect()
}

connect();

async function selecionarUsuario() {

    const cliente = await connect();
    const res = await cliente.query('SELECT * FROM usuario')

}