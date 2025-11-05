var http = require('http');
      //create a server object with request/response
/*http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
*/
const express = require('express');
const app = express();
app.get('/', function(req, res){
   res.send("Home page");
});
app.get('/hello', function(req, res){
   res.send("Hello world page!");
});
app.listen(8080);
app.get('/form', function(req, res){
      res.send("<form action='/submit' method='post'>Name: <input name='username'/> <br> <input type='submit'/></form>");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.post('/submit', function(req,res){
  res.send("Thanks " + req.body.username);
});
} );
