const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'B@ckus190',
  database: 'verduleria',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql connected...');
});

module.exports = { conn };
