const express = require("express");
const app = express();

const server = require("http").createServer(app);
const {Server} = require("socket.io");

const io = new Server(server);


// Routes
app.get("/", (req, res) => {
    res.send("This is a realtime whiteboard sharing web application");
});

io.on("Connection: ", (socket) => {
    console.log("User Connected");
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log("Server is running on http://localhost:5000"));