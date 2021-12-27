import { useState } from "react"

export default function States(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function captureMove(ev){
    setX(ev.clientX)
    setY(ev.clientY)
  }

  return (
    <div style={{
      margin: '15rem 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center'
    }} onMouseMove={captureMove}>
      <h2>Valor de x quando o mouse movimenta: {x}</h2>
      <h2>Valor de y quando o mouse movimenta: {y}</h2>
    </div>
  )
}