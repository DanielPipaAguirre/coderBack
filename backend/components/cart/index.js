const express = require("express");
const { Router } = express;
const router = new Router();
const Carrito = require("../cart/controllers");
const carrito = new Carrito();

const ADMIN = process.env.ADMINISTRADOR;

router.get("/:id/productos", async (req, res, next) => {
    const products = await carrito.getProducts(+req.params.id);
    if (products.length) return res.json(products);
    return res.status(500).json({
        mensaje: "Carrito no encontrado",
    });
});

router.post("/", async (req, res, next) => {
    if (!ADMIN) {
        return res.status(500).json({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`,
        });
    }
    const id = await carrito.create();
    res.json({
        estado: "GUARDADO",
        carrito: {
            id,
        },
    });
});

router.post("/:id/productos", async (req, res, next) => {
    if (!ADMIN) {
        return res.status(500).json({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`,
        });
    }
    const id = +req.params.id;
    const success = await carrito.addProduct(id, req.body);
    if (success) {
        return res.json({
            estado: "GUARDADO",
            carrito: {
                id,
                producto: req.body,
            },
        });
    }
    return res.status(500).json({
        mensaje: "Carrito no encontrado",
    });
});

router.delete("/:id/productos/:id_prod", async (req, res, next) => {
    if (!ADMIN) {
        return res.status(500).json({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`,
        });
    }
    await carrito.deleteProduct(+req.params.id, +req.params.id_prod);
    res.send(`Carrito ${req.params.id} eliminado`);
});

router.delete("/:id", async (req, res, next) => {
    if (!ADMIN) {
        return res.json({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`,
        });
    }
    await carrito.deleteAll(+req.params.id);
    res.send(`Carrito ${req.params.id} eliminado`);
});

module.exports = router;
