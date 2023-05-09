const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    password: 'NnIiKkAa1998!',
    host: 'localhost',
    port: 5433,
    database: 'todoapp'
})

module.exports = pool