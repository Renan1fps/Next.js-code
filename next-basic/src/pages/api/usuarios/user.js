const usuariosDB = [{idade: 8, nome: 'renan'}];
export default function CrudUser(req, res){
  if (req.method === 'POST'){
    post(req, res);
  } else if (req.method === 'GET'){
    get(req, res);
  } else {
    res.status(405).json({ message: 'Error, method not allowed'})
  }
}

function post(req, res){
  const users = JSON.parse(req.body);
  console.log("api", users)
  usuariosDB.push(users);
  res.status(201).json(users);
}

function get(req, res){
  res.status(200).json(usuariosDB);
}