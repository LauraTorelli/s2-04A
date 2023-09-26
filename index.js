
var http = require('http');
var dt5 = require('./myasyncmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Pagina inicial " + dt.myDateTime() + "<br> <br>" + 
            "Pagina do medico " + dt1.myDateTime1() + "<br> <br>" + 
            "Pagina dos planos " + dt2.myDateTime2() + "<br> <br>" +
            "Pagina de login "  + dt3.myDateTime3() + "<br> <br>" +
            "Pagina de registro " + dt4.myDateTime4());
  res.end();
}).listen(5001);
