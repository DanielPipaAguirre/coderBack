const fs = require("fs");

class Mensajes {
    constructor() {
        this.contador = 1;
        this.mensajes = [];
    }

    async save(mensaje) {
        try {
            mensaje.id = this.contador;
            this.mensajes.push(mensaje);
            await fs.promises.writeFile(
                "./mensajes.txt",
                JSON.stringify(this.mensajes)
            );
            this.contador += 1;
        } catch (e) {
            console.error(e.message);
        }
    }


    async getAll() {
        try {
            const mensajes = await fs.promises.readFile(
                "./mensajes.txt",
                "utf-8"
            );
            return JSON.parse(mensajes);
        } catch (e) {
            console.error(e.message);
        }
    }

}

module.exports = Mensajes;
