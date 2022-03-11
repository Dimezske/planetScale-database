const mysql = require("mysql2");
require('dotenv').config()
const conn = mysql.createConnection(
  'mysql://'
);

conn.query("select * from users;", function (err, _rows, _fields) {
  if (err) console.log(err.message);
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
