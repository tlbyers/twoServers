var http = require("http");

var PORT1 =  7000;
var PORT2 =  7500;

function tellGood(request, response){
	response.end ("You are such a nice person!");
}

function tellBad(request, response){
	response.end ("Your feet stink!");
}

var server1 = http.createServer(tellGood);
var server2 = http.createServer(tellBad);

server1.listen(PORT1, function(){
	console.log("Server listening on:http://localhost:%s",PORT1)

});

server2.listen(PORT2, function(){
	console.log("Server listening on:http://localhost:%s",PORT2)

});

