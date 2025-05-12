const { Pool } = require('pg');

async function connect(){
    
    const pool = new Pool({
        user: process.env.USER_NAME,
        password: process.env.PW,
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DB_NAME,
    });

    const client = await pool.connect();
    console.log('Conexão com o banco de dados com sucesso!')
    client.release();
    return pool.connect()
}

connect()

module.export = {

    connect


}




