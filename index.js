const express = require("express");
const Contenedor = require("./contenedor");

const app = express();
const PORT = 8080;
const manejadorArchivo = new Contenedor();

app.get("/productos", async (req, res, next) => {
    const products = await manejadorArchivo.getAll();
    res.json(products);
});

app.get("/productoRandom", async (req, res, next) => {
    const products = await manejadorArchivo.getAll();
    const randomId = Math.floor(Math.random() * products.length);
    const product = await manejadorArchivo.getById(randomId);
    res.json(product);
});

const server = app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto: ${server.address().port}`
    );
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));
