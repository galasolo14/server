const dotenv = require('dotenv');
// const assert = require('assert');

dotenv.config();

//  express server config
const PORT=5000
const HOST='localhost'
const HOST_URL='http://localhost:5000'

// sql server config
const SQL_USER='sa'
const SQL_PASSWORD='galit777'
const SQL_DATABASE='shopping'
const SQL_SERVER='127.0.0.1'
const SQL_ENCRYPT=false

// const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const qslEncrypt = process.env.SQL_ENCRYPT === "true";

// assert(PORT, 'PORT is require');
// assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: qslEncrypt,
            enableArithAbort: true
        }
    }
}