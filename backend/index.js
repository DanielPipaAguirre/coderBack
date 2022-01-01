const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const routerProduct = require("./components/products");
const routerCart = require("./components/cart");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use("/api/productos", routerProduct);
app.use("/api/carrito", routerCart);
app.use("/public", express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto: ${server.address().port}`
    );
});

app.get("*", (req, res) => {
    res.status(404).json({
        error: -2,
        descripcion: `ruta ${req.path} metodo ${req.method} no implementada`,
    });
});
