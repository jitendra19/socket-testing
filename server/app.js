const {Server} =  require("socket.io");

const io = new Server({
    cors : {
        origin: "*"
    }
});

let likes = 0;

io.on("connection", (socket) => {
    socket.emit("likeUpdates", likes);
    socket.on("liked", () => {
        likes++;
        socket.emit("likeUpdates", likes);
        socket.broadcast.emit("likeUpdates", likes);
    })
});

io.listen(3000);