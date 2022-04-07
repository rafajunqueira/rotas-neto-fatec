module.exports = {
  usuariosIndex,
  usuariosGetAll,
};

function usuariosIndex(req, res) {
  res.json("Rota Usuários Encontrada!");
  consoloe.log("Rota Usuários Encontrada!");
}

function usuariosGetAll(req, res) {
  console.log("Rota Usuários Listar Encontrada!");

  models.getAllUsuarios(id, function (err, resposta) {
    console.log("Retorno de usuarios { MODELS }", resposta);
    if (err) {
      throw err;
    } else res.json(resposta);
  });
}
