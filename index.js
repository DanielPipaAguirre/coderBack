const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const { Server: HttpServer } = require("http");
const routerProduct = require("./components/products");
const Socket = require("./utils/sockets");

const app = express();
const PORT = 8080;
const httpServer = new HttpServer(app);
const socket = new Socket(httpServer);
socket.init();

app.get("/", async (req, res, next) => {
    res.render("formulario.hbs");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", routerProduct);
app.use("/public", express.static(path.join(__dirname, "public")));
app.engine(
    "hbs",
    handlebars.create({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/hbs",
        partialsDir: __dirname + "/views/hbs",
    }).engine
);
app.set("views", path.join(__dirname, "views", "hbs"));
app.set("view engine", "hbs");

const server = httpServer.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto: ${server.address().port}`
    );
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));
