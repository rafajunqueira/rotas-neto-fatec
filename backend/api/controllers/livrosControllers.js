const models = require("../models/livrosModels");

module.exports = {
  livrosIndex,
  livrosGetAll,
  livrosGetById,
  //livrosUpdate,
  livrosDelete,
  livrosInsert,
  livrosAi,
};

function livrosIndex(req, res) {
  res.json("Rota Livros Encontrada!");
  console.log("Rota Livros Encontrada!");
}

function livrosGetAll(req, res) {
  console.log("Rota SELECT * Livros Encontrada!");
  models.getAllLivros(function (err, resposta) {
    console.log("Retorno de livros { MODELS }", res);
    if (err) {
      throw err;
    } else res.json(resposta);
  });
}

function livrosGetById(req, res) {
  const id = req.params.id;
  console.log("Parâmetro SELECT POR ID Livro Recebido: " + id);
  models.getByIdLivros(id, function (err, resposta) {
    console.log("Retorno de livros por id { MODELS }", resposta);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  });
}

// function livrosUpdate(req, res) {
//   //const { id } = req.params.id;
//   const dados = req.body;
//   console.log("Parâmetro UPDATE Livro Recebido: " + dados.liv_codigo);
//   models.updateLivros(id, dado, function (err, resposta) {
//     console.log("Retorno de livros por id { MODELS }", resposta);
//     if (err) {
//       throw err;
//     } else {
//       res.json(resposta);
//     }
//   });
// }

function livrosDelete(req, res) {
  const id = req.params.id;
  console.log("Parâmetro DELETE Livro por ID Recebido: " + id);
  models.deleteLivros(id, function (err, resposta) {
    console.log("Retorno de DELETE de livro por id { MODELS }", resposta);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  });
}

function livrosInsert(req, res) {
  const id = req.params.id;
  console.log("Parâmetro INSERT Livro Recebido: " + id);
  models.insertLivros(function (err, resposta) {
    console.log("Retorno de INSERT de livro { MODELS }", resposta);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  });
}

function livrosAi(req, res) {
  const id = req.params.id;
  let p_ativo = "";
  console.log("Parâmetro LIVRO ATIVO/INATIVO Recebido: " + id);
  models.getByIdLivros(id, function (err, resposta) {
    console.log(
      "Retorno de LIRVOS ATIVOS/INATIVOS por id { MODELS }",
      resposta[0].liv_ativoinativo
    );
    p_ativo = resposta[0].liv_ativoinativo;
    if (err) {
      throw err;
    } else {
      if (p_ativo == "A") {
        p_ativo = "I";
      } else p_ativo = "A";

      console.log("A/I: " + p_ativo);
      models.aiLivros(id, p_ativo, function (err, result) {
        if (err) {
          throw err;
        } else {
          console.log("Ativo/Inativo ralizado com sucesso!");
        }
      });
    }
  });
}
