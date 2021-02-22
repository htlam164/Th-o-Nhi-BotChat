var express = require("express");

var socketio = require("socket.io");

var app = express();
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
// Static folder

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var server = app.listen(PORT, function() {
    console.log("Server is running on port", PORT);
});
// // process.env.PORT
///asd
var io = socketio(server);
var socketcontrol = require("./apps/common/socketcontrol")(io);