// Importa o model de categorias
const model = require("../models/categoriaModel");

/* =====================================================
   LISTAR CATEGORIAS
===================================================== */
exports.index = async (req, res) => {
  const categorias = await model.listar();

  res.render("categorias/index", {
    categorias,
    categoriaEditar: null,
  });
};

/* =====================================================
   SALVAR NOVA CATEGORIA
===================================================== */
exports.salvar = async (req, res) => {
  await model.salvar({
    nome: req.body.nome.toUpperCase(),
    descricao: req.body.descricao,
  });

  res.redirect("/categorias");
};

/* =====================================================
   FORM EDITAR
===================================================== */
exports.formEditar = async (req, res) => {
  const categorias = await model.listar();

  const categoriaEditar = await model.buscarPorId(req.params.id);

  res.render("categorias/index", {
    categorias,
    categoriaEditar,
  });
};

/* =====================================================
   EDITAR
===================================================== */
exports.editar = async (req, res) => {
  await model.editar(req.params.id, {
    nome: req.body.nome.toUpperCase(),
    descricao: req.body.descricao,
  });

  res.redirect("/categorias");
};

/* =====================================================
   EXCLUIR - sem fk
===================================================== */
exports.excluir = async (req, res) => {
  await model.excluir(req.params.id);

  res.redirect("/categorias");
};

/* =====================================================
   API - LISTAR CATEGORIAS EM JSON
===================================================== */
exports.api = async (req, res) => {
  try {
    const categorias = await model.listar();

    res.json(categorias);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao buscar categorias",
    });
  }
};
