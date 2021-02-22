var express = require("express");
var config = require("config");

var socketio = require("socket.io");

var app = express();

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

// Static folder

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