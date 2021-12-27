import { useRouter } from "next/router"

export default function Rota3(){
  const { query } = useRouter();
  return (
    <div>
      <h1>Outra forma de pegar params da rota</h1>
      <span>Params -&gt; {query.id}</span><br/>
      <span>Params -&gt; {query.nome}</span><br/>
      <span>Params -&gt; {query.idade}</span><br/>
      {/*rota -> /rotasDinamicas/rota2?id=2&nome=teste&idade=22 */}
    </div>
  )
}