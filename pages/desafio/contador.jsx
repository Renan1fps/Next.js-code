import { useState } from "react"

const style = {
  margin: '15rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem'
};

const divStyleButton = {
  margin: '1rem 0',
}

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  margin: '0 1rem',
  padding: '1rem',
  borderRadius: '0.3rem'
}

export default function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <div style={style}>
      <span>Valor contador: {contador}</span>
      <div style={divStyleButton}>
        <button
          style={buttonStyle}
          onClick={() => setContador(contador + 1)}
        >+</button>
        <button
          style={buttonStyle}
          onClick={() => setContador(contador - 1)}
        >-</button>
      </div>
    </div>
  )
}