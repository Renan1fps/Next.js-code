import { useState } from "react";
import { Filho } from "../../components/Filho";

const initialValue = "Frase inicial"

export default function Indireta(){
  const [frase, setFrase] = useState(initialValue);

  function setNewFrase(newFrase){
    setFrase(newFrase)
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Componente pai exibindo frase abaixo</h1>
      <span>{frase}</span>
      <button onClick={() => setFrase(initialValue)}>Voltar a frase original</button>
      <Filho mudaState={setNewFrase}/>
    </div>
  )
}