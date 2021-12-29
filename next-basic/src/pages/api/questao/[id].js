export default function questao(req, res){
  if(req.method === 'GET'){
    getQuestao(req, res);
  } else {
    res.status(400).json({ message: 'Fail' });
  }
}

function getQuestao(req,res){
  const id = req.query.id;
  res.status(200).json({
    id,
    message: 'Success',
    question: 'Qual sua cor preferida?',
    answer: [ 'Black', 'Blue', 'yello', 'Red' ]
  })
}