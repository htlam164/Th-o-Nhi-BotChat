module.exports = function(io) {
    var usernames = [];
    io.sockets.on("connection", function(socket) {
        console.log("Have a new user connected");

        // Listen adduser event
        socket.on("adduser", function(username) {
            socket.username = username;
            usernames.push(username);

            //notify to myself
            var data = {
                sender: "SERVER",
                message: "You have jonin chat room",
            };

            socket.emit("update_message", data);

            //Notify to other users
            var data = {
                sender: "SERVER",
                message: usernames + " have join to chat rom"
            };

            socket.broadcast.emit("update_message", data);
        });

        //listen send_message event
        socket.on("send_message", function(message) {
            //Notify to myself
            var data = {
                sender: "You",
                message: message
            };
            socket.emit("update_message", data);

            //Notify to other users
            var data = {
                sender: socket.username,
                message: message
            };
            socket.broadcast.emit("update_message", data);
        });
        //listen disconnect event
        socket.on("disconnect", function() {
            //Delete username
            for (var i = 0; i < usernames.length; i++) {
                if (usernames[i] == socket.username) {
                    usernames.splice(i, -1);
                }
            }
            var data = {
                sender: "SERVER",
                message: socket.username + "left chat room"
            };
            socket.broadcast.emit("update_message", data);
        })
    });
}