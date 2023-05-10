const express = require("express");
const app = express();
const http = require("http")
const server = http.createServer(app);

const {Server} =  require("socket.io");
const events = require("events");

const io = new Server(server, {
    cors : {
        origin: "*"
    }
});

let likes = 0;
const eventEmitter = new events.EventEmitter();

setInterval(()=> {
    likes++;
    eventEmitter.emit('updateInterval');
}, 2000)

io.on("connection", (socket) => {
    socket.emit("likeUpdates", likes);
    socket.on("liked", () => {
        likes++;
        socket.emit("likeUpdates", likes);
        socket.broadcast.emit("likeUpdates", likes);
    });
    eventEmitter.on("updateInterval", ()=> {
        socket.broadcast.emit("likeUpdates", likes);
    })
});

// io.listen(3000);

app.get('/', (req, res) => {
    res.send("Hello");
})

server.listen(3000);