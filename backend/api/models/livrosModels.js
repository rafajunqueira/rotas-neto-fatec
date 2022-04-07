const conexao = require("../../config/conexao.js");

module.exports = {
  getAllLivros,
  getByIdLivros,
  //updateLivros,
  deleteLivros,
  // insertLivros,
  aiLivros,
  editorasLivrosGetByIdJoin,
};

function editorasLivrosGetByIdJoin(id, callback) {
  const p_sql =
    "select l.liv_codigo, l.liv_titulo, a.aut_codigo, a.aut_nome from livros l inner join autores a where l.aut_codigo=a.aut_codigo and l.liv_codigo=" +
    id;
  conexao.query(p_sql, callback);
}

function getAllLivros(callback) {
  conexao.query("select * from livros", callback);
}

function getByIdLivros(id, callback) {
  conexao.query("select * from livros where liv_codigo=" + id, callback);
}

function deleteLivros(id, callback) {
  conexao.query("delete from livros where liv_codigo=" + id, callback);
}

function aiLivros(id, ativo, callback) {
  console.log("Livro Ativo/Inativo " + id + " - " + ativo);
  const p_sql =
    "update livros set liv_ativoinativo='" + ativo + "' where liv_codigo=" + id;
  console.log(p_sql);

  conexao.query(p_sql, function (err, result) {
    conexao.query(p_sql, callback);
  });
}

function insertLivros(id, callback) {
  const p_sql =
    "'insert into livros set liv_codigo='" +
    5 +
    "',liv_titulo='" +
    "'Guia Manga - Microprocessadores'" +
    "',liv_edicao='" +
    "'1a Edicao'" +
    "',liv_isbn='" +
    "'987-321'" +
    "',liv_ano='" +
    "'2016'" +
    "',aut_codigo='" +
    2 +
    "',edt_codigo='" +
    3 +
    "',liv_ativoinativo='" +
    "'A'";
  console.log("Inserindo livro.. \n" + p_sql);
  conexao.query(p_sql, callback);
}

// function updateLivros(callback) {
//   const p_sql =
//     "update livros set liv_titlo " +
//     dados.liv_titulo +
//     ", liv_edicao" +
//     dados.liv_edicao +
//     ", liv_isbn" +
//     dados.liv_isbn +
//     ", liv_ano" +
//     dados.liv_ano +
//     ", edt_ativoinativo" +
//     dados.liv_ativoinativo +
//     ", aut_codigo" +
//     dados.aut_codigo +
//     ", edt_codigo" +
//     dados.edt_codigo +
//     "where LIV_CODIGO =" +
//     dados.liv_codigo;
//   console.log("Atualizando livros \n" + p_sql);
//   conexao.query(p_sql, callback);
// }
