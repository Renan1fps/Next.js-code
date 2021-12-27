import { useRouter } from 'next/router'

export default function Id(){
  const { query } = useRouter();
  return (
    <div>
      <h1>Rota dinâmica com id vindo dos queryParams</h1>
      <span>Id -&gt; {query.id}</span>
    </div>
  )
}