const { Server: SocketIO } = require("socket.io");
const Productos = require("../../components/products/controllers");
const Mensajes = require("../../components/messages/controllers");
const productos = new Productos();
const mensajes = new Mensajes();

class Socket {
    static instancia;
    constructor(http) {
        if (Socket.instancia) {
            return Socket.instancia;
        }
        Socket.instancia = this;
        this.io = new SocketIO(http);
        this.mensajes = [];
        this.usuarios = [];
    }

    init() {
        try {
            this.io.on("connection", async (socket) => {
                console.log("Usuario conectado!");
                socket.emit("productos", await productos.getAll());
                socket.on("update", async (data) => {
                    if (data === "ok") {
                        this.io.sockets.emit(
                            "productos",
                            await productos.getAll()
                        );
                    }
                });
                socket.emit("mensajes", await mensajes.getAll());
                socket.on("nuevo-mensaje", async (data) => {
                    await mensajes.save(data);
                    this.io.sockets.emit("mensajes", await mensajes.getAll());
                });
            });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Socket;
