const fs = require("fs");

class Carrito {
    constructor() {
        this.contador = 1;
        this.carrito = [];
    }

    async create() {
        try {
            const id = this.contador;
            this.carrito.push({
                id,
                timestamp: new Date().toLocaleString(),
                products: [],
            });
            await fs.promises.writeFile(
                "./carrito.txt",
                JSON.stringify(this.carrito)
            );
            this.contador += 1;
            return id;
        } catch (e) {
            console.error(e.message);
        }
    }

    async addProduct(id, archivo) {
        try {
            const contenido = JSON.parse(
                await fs.promises.readFile("./carrito.txt", "utf-8")
            );
            const index = contenido.findIndex((archivo) => archivo.id === id);
            if (contenido[index]) {
                contenido[index].products.push(archivo);
                await fs.promises.writeFile(
                    "./carrito.txt",
                    JSON.stringify(contenido)
                );
                return true;
            }
            return undefined;
        } catch (e) {
            console.error(e.message);
        }
    }

    async getProducts(id) {
        try {
            const contenido = JSON.parse(
                await fs.promises.readFile("./carrito.txt", "utf-8")
            );
            const index = contenido.findIndex((archivo) => archivo.id === id);
            const products = contenido[index] ? contenido[index].products : [];
            return products;
        } catch (e) {
            console.error(e.message);
        }
    }

    async emptyCart(id) {
        try {
            const contenido = await fs.promises.readFile(
                "./carrito.txt",
                "utf-8"
            );
            const carrito = JSON.parse(contenido).filter(
                (archivo) => archivo.id !== id
            );
            await fs.promises.writeFile(
                "./carrito.txt",
                JSON.stringify(carrito)
            );
        } catch (e) {
            console.error(e.message);
        }
    }

    async deleteProduct(id, productId) {
        try {
            const contenido = JSON.parse(
                await fs.promises.readFile("./carrito.txt", "utf-8")
            );
            const index = contenido.findIndex((archivo) => archivo.id === id);
            if (contenido[index]) {
                const productos = contenido[index].products.filter(
                    (archivo) => archivo.id !== productId
                );
                contenido[index].products = productos;
                await fs.promises.writeFile(
                    "./carrito.txt",
                    JSON.stringify(contenido)
                );
            }
        } catch (e) {
            console.error(e.message);
        }
    }

    async deleteAll(id) {
        try {
            const contenido = JSON.parse(
                await fs.promises.readFile("./carrito.txt", "utf-8")
            );
            const index = contenido.findIndex((archivo) => archivo.id === id);
            if (contenido[index]) {
                contenido.splice(index, 1);
                await fs.promises.writeFile("./carrito.txt", contenido);
            }
        } catch (e) {
            console.error(e.message);
        }
    }
}

module.exports = Carrito;
