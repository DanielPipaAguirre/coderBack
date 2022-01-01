const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { Router } = express;
const router = new Router();
const Productos = require("./controllers");
const productos = new Productos();

const ADMIN = process.env.ADMINISTRADOR;

router.get("/:id?", async (req, res, next) => {
    if (!req.params.id) return res.json(await productos.getAll());
    const product = await productos.getById(+req.params.id);
    if (product.length) return res.json(product);
    return res.json({
        mensaje: "producto no encontrado",
    });
});

router.post("/", async (req, res, next) => {
    if (!ADMIN) {
        return res.json({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`,
        });
    }
    await productos.save(req.body);
    res.json({ estado: "GUARDADO", producto: req.body });
});

router.put("/:id", async (req, res, next) => {
    if (!ADMIN) {
        return res.json({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`,
        });
    }
    await productos.updateById(+req.params.id, req.body);
    res.json(req.body);
});

router.delete("/:id", async (req, res, next) => {
    if (!ADMIN) {
        return res.json({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`,
        });
    }
    await productos.deleteById(+req.params.id);
    res.send(`Producto ${req.params.id} eliminado`);
});

module.exports = router;
