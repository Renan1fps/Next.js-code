import Router from "next/router";

export default function Programatica() {

  function routeWithId(id) {
    Router.push(`/rotasDinamicas/${id}`)
  }

  function nonDynamicRoute() {
    Router.push('/rotasDinamicas/rota1')
  }

  function routeWithParams(id, name, idade) {
    Router.push({
      pathname: '/rotasDinamicas/rota2',
      query: {
        id,
        name,
        idade,
      }
    })
  }

  return (
    <div>
      <h1>Rotas com push</h1>
      <button onClick={() => Router.push('/rotasDinamicas')}>Rota index</button>
      <button onClick={() => routeWithId(1234)}>Rota com id</button>
      <button onClick={nonDynamicRoute}>Rota não dinamica</button>
      <button onClick={() => routeWithParams(1234, 'teste', 22)}>Rota query params</button>
    </div>
  ) 
}