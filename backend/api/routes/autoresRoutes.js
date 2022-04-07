const controller = require("../controllers/autoresControllers");

server.get("/autores", controller.autoresIndex);

server.get("/autores/listar", controller.autoresGetAll);
