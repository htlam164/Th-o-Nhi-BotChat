var http = require("http");

var server = http.createServer(function(reg, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello, Thao Nhi Dang Iu");
    res.end();
});

server.listen(process.env.PORT, function(){
    console.log("Server running on port 3000");
})