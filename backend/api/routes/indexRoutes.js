const controller = require("../controllers/indexControllers");

server.get("/", controller.index);
