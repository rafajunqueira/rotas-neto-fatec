const conexao = require("../../config/conexao.js");

module.exports = {
  getAllAutores,
};

function getAllAutores(callback) {
  conexao.query("select * from autores", callback);
}
