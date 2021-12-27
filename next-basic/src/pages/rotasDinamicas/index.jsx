/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

export default function Navegacao() {
  return (
    <div>
      <ul>
        <Link href="/rotasDinamicas/rota1" >
          <button>rota1</button>
        </Link><br />
        <Link href="/rotasDinamicas/rota2?id=3&nome=teste&idade=22" >
          <button>rota2</button>
        </Link><br />
        <Link href="/rotasDinamicas/23233232" >
          <button>rota com id</button>
        </Link><br />
      </ul>
    </div>
  )
}