var express = require("express");

var socketio = require("socket.io");

var app = express();
port = 3000;
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

// Static folder

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var server = app.listen(process.env.PORT, function() {
    console.log("Server is running on port", port);
});
// // process.env.PORT
///asd

var io = socketio(server);
var socketcontrol = require("./apps/common/socketcontrol")(io);