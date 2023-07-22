const express = require("express");
const { getCharById } = require("./controllers/getCharById");
const server = express();
const PORT = 3001;
// RUTAS
server.get("/healt-check/:id", getCharById);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

// TODO : ANTERIOR
/* const http = require("http");
const PORT = 3001;
const data = require("./utils/data");
const { getCharById } = require("./controllers/getCharById.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Cors --> Le damos acceso a todos ("*")
    const id = req.url.split("/").at(-1); // '10'

    if (req.url.includes("/rickandmorty/character")) {
      return getCharById(res, id);
    }

    if (req.url.includes("detail")) {
      return getCharById(res, id);
    }
  })
  .listen(PORT, "localhost");
 */
