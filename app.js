var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");

var socketio = require("socket.io");

var app = express();
//body parser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

// Static folder
app.use("/static", express.static(__dirname + "/public"));

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var host = config.get("server.host");
var port = config.get("server.port");
var server = app.listen(process.env.PORT || port, host, function() {
    console.log("Server is running on port", port);
});
// // 
///asd

var io = socketio(server);
var socketcontrol = require("./apps/common/socketcontrol")(io);