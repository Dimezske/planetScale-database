const mysql = require("mysql2");
require('dotenv').config()
const conn = mysql.createConnection(
  'mysql://i8c7jm8pbmvw:pscale_pw_kw2GcIGNRFRxQK-yPM_BFMjeMEHAMf7ivusxvmoimAc@9plz9uw8seak.us-east-2.psdb.cloud/auth?ssl={"rejectUnauthorized":true}'
);

conn.query("select * from users;", function (err, _rows, _fields) {
  if (err) console.log(err.message);
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
