const controller = require("../controllers/usuariosControllers");

server.get("/usuarios", controller.usuariosIndex);

server.get("/usuarios/listar", controller.usuariosGetAll);
