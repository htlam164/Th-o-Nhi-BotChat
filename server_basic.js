var http = require("http");

var server = http.createServer(function(reg, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello, This is the first webserver with NodeJS");
    res.end();
});

server.listen(3000, function(){
    console.log("Server running on port 3000");
})