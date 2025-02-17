async function connect(){

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

    global.connection = pool
    return pool.connect()
}