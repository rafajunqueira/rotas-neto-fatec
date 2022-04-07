const conexao = require("../../config/conexao.js");

module.exports = {
  getAllEditoras,
};

function getAllEditoras(callback) {
  conexao.query("select * from editoras", callback);
}
