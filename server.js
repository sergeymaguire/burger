
var express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    app = express(),
    PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));



app.use(bodyParser.urlencoded({ extended: false }));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});