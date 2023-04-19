const mysql = require('mysql2');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'mynameispopat12345!@#$%',
    database: 'dbms'
};

const connection = mysql.createConnection(config);

module.exports = connection;