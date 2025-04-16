// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:  [
      // "http://localhost:3000",
      "https://chat-app-ecru-xi-77.vercel.app"
    ],  
    methods: ["GET", "POST"],
    credentials: true
  }
});
   console.log("opened.")
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (data) => {
    console.log("Received:", data);
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server listening on https://mukulkasana0001.github.io/Server_repo/");
});
