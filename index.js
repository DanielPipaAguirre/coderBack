const express = require("express");
const path = require("path");
const { Router } = express;
const Contenedor = require("./contenedor");

const app = express();
const PORT = 8080;
const manejadorArchivo = new Contenedor();
const router = new Router();

app.get("/", async (req, res, next) => {
    res.render("index.pug");
});

router.get("/", async (req, res, next) => {
    const products = await manejadorArchivo.getAll();
    // res.json(products);
    res.render("table.pug", { products });
});

router.get("/:id", async (req, res, next) => {
    const product = await manejadorArchivo.getById(+req.params.id);
    if (product.length) return res.json(product);
    res.json({ error: "producto no encontrado" });
});

router.post("/", async (req, res, next) => {
    await manejadorArchivo.save(req.body);
    res.redirect("/");
});

router.put("/:id", async (req, res, next) => {
    await manejadorArchivo.updateById(+req.params.id, req.body);
    res.json(req.body);
});

router.delete("/productos/:id", async (req, res, next) => {
    await manejadorArchivo.deleteById(+req.params.id);
    res.send(`Producto ${req.params.id} eliminado`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", router);
/* app.use("/public", express.static(path.join(__dirname, "public"))); */
app.set("views", path.join(__dirname, "views", "pug"));
app.set("view engine", "pug");

const server = app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto: ${server.address().port}`
    );
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));
