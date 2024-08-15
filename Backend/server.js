const express = require("express");
const app = express();

const http = require("http").createServer(app);
const server = require("socket.io")(http);



app.get("/", (req, res) => {
    res.send("This is a realtime whiteboard sharing web application");
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log("Server is running on http://localhost:5000"));