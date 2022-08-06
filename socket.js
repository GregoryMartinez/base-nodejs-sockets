const socketIo = require("socket.io");

// Objeto para el socket
const io = {};

function socketConnect(servidor){
    // instancia socket
    io.socket = socketIo(servidor);
    // Escuchando socket
    io.socket.on("connection", (socket) =>{
        console.log("Cliente Conectado!", socket.id);

    });

}

module.exports = {
    socketConnect,
    io,

}