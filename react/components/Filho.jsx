export function Filho({ mudaState }){
  return (
    <div>
      <h1>Componente filho</h1>
      <button onClick={() => mudaState("Mudou o state pai")}>Clique aqui</button>
    </div>
  )
}