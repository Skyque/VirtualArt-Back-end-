const User = require('../models/user');
const { use } = require('../routes/userRoutes');

//Nota: Cambiar los nombres de las variables después para mejor contexto (userOBJ)

exports.login=(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const response = User.login(username, password);
    if(response == 0)
      res.status(200).json({mensaje: "Bienvenido " + username});
    else
      res.status(401).json({error: "Credenciales incorrectas"}); 
};

exports.findAll = (req, res) => {
  const userOBJ = User.findAll();
  res.json(products);

};

exports.findById = (req, res) => {
  const id = req.params.id;
  const userOBJ = User.findById(id);
  res.json(userOBJ);
};

exports.create = (req, res) => {
  const data = req.body;
  const userOBJ = User.create(data);
  res.json(userOBJ);
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const userOBJ = User.update(id, data);
  res.json(userOBJ);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.delete(id);
  res.json({ message: 'Usuario eliminado con éxito' });
};
