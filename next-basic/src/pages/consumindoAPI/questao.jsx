import { useEffect, useState } from "react"

const initialValues = {
  id: undefined,
  message: undefined,
  question: undefined,
  answer: [],
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'grey',
  height: '100vh',
  padding: '10rem',
  fontSize: '2rem'
}

export default function ConsumoAPI() {
  const [questao, setQuestao] = useState(initialValues);

  useEffect(() => {
    const baseURL = 'http://localhost:3001/api/questao/08'
    fetch(baseURL).then(response => response.json()).then(questaoResponse => setQuestao(questaoResponse));
  }, [])

  return (
    <div style={styles}>
      <span>id: {questao.id}</span>
      <span>questao: {questao.question}</span>
      {questao.answer.map((answer, index) => (
        <span key={index}>
          {answer}
        </span>
      ))}
    </div>
  )
}