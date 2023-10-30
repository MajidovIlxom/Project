const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.set("view engine", "ejs");
app.set("views", process.cwd() + "/views");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});
const Groups = []

io.on("connection", (socket) => {
    io.emit("groups", { groups: getConnectedGroupNames() });

    socket.on("create", (data) => {
        const group = { id: socket.id, name: data.name, group: data.group};
        Groups.push(group);
        io.emit("groups", { groups: getConnectedGroupNames() });
        socket.join(data.group)
});

    socket.on("join",({name,group})=>{
        socket.join(group)
        io.to(group).emit("added",{message: `${name} joined group`})
    })

    socket.on("xabar",({text,group, name})=>{
        socket.join(group)
        io.to(group).emit("added",{message: `${name}: ${text}` })
    })

socket.on("disconnect", function () {
    const index = Groups.findIndex((group) => group.id === socket.id);
    if (index !== -1) {
      Groups.splice(index, 1);
    }
    io.emit("groups", { groups: getConnectedGroupNames() });
  });
});
function getConnectedGroupNames() {
    return Groups.map((user) => ({ id: user.id, name: user.name, group: user.group }));
}

server.listen(4000, () => {
    console.log(4000);
});