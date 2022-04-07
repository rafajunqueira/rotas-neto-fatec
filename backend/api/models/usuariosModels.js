const conexao = require("../../config/conexao.js");

module.exports = {
  getAllUsuarios,
};

function getAllUsuarios(callback) {
  conexao.query("select * from usuarios", callback);
}
