
var mysql = require("mysql");
if(process.env.JAWS_URL){
  var connection = mysql.createConnection(process.env.JAWS_URL)
}else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1525wilma",
  database: "burgers_db"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
