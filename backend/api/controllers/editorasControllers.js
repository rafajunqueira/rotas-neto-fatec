module.exports = {
  editorasIndex,
  editorasGetAll,
};

function editorasIndex(req, res) {
  res.json("Rota Editoras Encontrada!");
  console.log("Rota Editoras Encontrada!");
}

function editorasGetAll(req, res) {
  console.log("Rota Editoras Listar Encontrada!");
  models.getAllLivros(function (err, resposta) {
    console.log("Retorno de editoras { MODELS }", res);
    if (err) {
      throw err;
    } else res.json(resposta);
  });
}
