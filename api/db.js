const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "soniya6543",
    host: "localhost",
    port: 5432,
    database: "bioDB"
});

module.exports = pool;