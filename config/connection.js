
var mysql = require("mysql");
if(process.env.JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1525wilma",
  database: "burgers_db"
});
};
var PORT = process.env.PORT || 3000;

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
