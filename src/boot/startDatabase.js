const pg = require('pg');
const { Pool, Client } = pg

module.exports = async () => {
    // const pool = new Pool({
    //     user: 'postgres',
    //     password: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     database: 'postgres',
    // })

    // console.log(await pool.query('SELECT NOW()'))

    const client = new Client({
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'postgres',
    })

    await client.connect()

    console.log(await client.query('SELECT NOW()'))

    return client;
}