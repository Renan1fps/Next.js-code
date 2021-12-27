import { Pessoa } from "../../components/Pessoa";

export default function PessoaPage() {
  return (
    <div>
      <Pessoa
        idade={20}
        name="Exemplo"
      />
    </div>
  )
}