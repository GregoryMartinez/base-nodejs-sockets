// Importaciones
const express = require("express");
const bodyParser = require("body-parser");
const config = require("../config");
const socket = require("../socket");

// Aplicacion
const app = express();

// Socket server
const server = require("http").Server(app);

// Middlewares
app.use(bodyParser.json());

// Conexiones
socket.socketConnect(server);

// Escuchar puerto
server.listen(config.api.port, () =>{
    console.log(`Servidor escuchando en el puerto: http://localhost:${config.api.port}`)
})