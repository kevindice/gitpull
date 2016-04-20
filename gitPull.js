// http://nodejs.org/api.html#_child_processes
var http = require('http');
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

var app = http.createServer(function(req, res){
  res.end("I sense a disturbance in the force.");
  exec("git pull", puts);
});

app.listen(3000);
