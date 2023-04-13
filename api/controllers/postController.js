const Post = require('../models/post');
const { use } = require('../routes/postRoutes');

exports.findAllCategories = async (req, res) => {
    const categoiesOBJ = await Post.findAllCategories();
    if(categoiesOBJ == 1)
      res.status(500).json({response: "Hubo un prblema al buscar las categorías"});
    else
      res.status(200).json(categoiesOBJ);
  };

  exports.findCategoriesById = async (req, res) => {
    const id = req.params.id;
    const categoiesOBJ = await Post.findCategoryById(id);
    if(categoiesOBJ == 1)
      res.status(500).json({response: "Hubo un prblema al buscar las categorías"});
    else
      res.status(200).json(categoiesOBJ);
  };

  exports.findAll = async (req, res) => {
    const categoiesOBJ = await Post.findAll();
    if(categoiesOBJ == 1)
      res.status(500).json({response: "Hubo un prblema al buscar las publicaciones"});
    else
      res.status(200).json(categoiesOBJ);
  };

  exports.findById = async (req, res) => {
    const id = req.params.id;
    console.log("Voy a buscar la publicación: "+ id);
    const postOBJ = await Post.findById(id);
    if(postOBJ == 1)
      res.status(500).json({response: "El usuario que inició sesió no pudo ser encontrado"});
    else
      res.status(200).json(postOBJ);
  };

  exports.getLast = async (req, res) => {
    const postOBJ = await Post.getLast();
    console.log(postOBJ);
    if(postOBJ == null)
      res.status(500).json({error: "Ocurrió un problema al buscar la última publicación"});
    else
      res.status(200).json(postOBJ);
  };

  exports.getUserPosts = async (req, res) =>{
    const id = req.params.id;
    const postOBJ = await Post.getUserPosts(id);
    console.log(postOBJ);
    if(postOBJ == null)
      res.status(500).json({error: "Ocurrió un problema al buscar las publicaciones del usuario"});
    else
      res.status(200).json(postOBJ);
  };

  exports.getCategoryPosts = async (req, res) =>{
    const id = req.params.id;
    const postOBJ = await Post.getCategoryPosts(id);
    console.log(postOBJ);
    if(postOBJ == null)
      res.status(500).json({error: "Ocurrió un problema al buscar las publicaciones de la categoría"});
    else
      res.status(200).json(postOBJ);
  };

  exports.create = async (req, res) => {
    const data = req.body;
    const postOBJ = await Post.create(data);
    console.log(postOBJ);
    if(postOBJ == null)
      res.status(500).json({error: "Ocurrió un problema al crear la publicación"});
    else
      res.status(200).json(postOBJ);
  };