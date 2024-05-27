// import ip from "../Ip";
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST","PUT"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    // console.log(data)
    socket.join(data);
  });

  socket.on("new_bid", (data,randomname) => {
    // console.log("new bid"+data)
io.to(data).emit("new_bid", data,randomname);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});