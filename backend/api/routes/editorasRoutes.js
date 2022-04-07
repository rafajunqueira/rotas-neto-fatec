const controller = require("../controllers/editorasControllers");

server.get("/editoras", controller.editorasIndex);

server.get("/editoras/listar", controller.editorasGetAll);
