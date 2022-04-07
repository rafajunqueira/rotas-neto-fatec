module.exports = {
  autoresIndex,
  autoresGetAll,
};

function autoresIndex(req, res) {
  res.json("Rota Autores Encontrada!");
  console.log("Rota Autores Encontrada!");
}

function autoresGetAll(req, res) {
  console.log("Rota Autores Listar Encontrada!");
  models.getAllLivros(function (err, resposta) {
    console.log("Retorno de Autores { MODELS }", resposta);
    if (err) {
      throw err;
    } else res.json(resposta);
  });
}
