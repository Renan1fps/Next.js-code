interface PessoaProps{
  name: string,
  idade: number
}

export function Pessoa(props: PessoaProps){
  return (
    <div>
      <span>Nome: {props.name}</span>
      <span>Nome: {props.idade}</span>
    </div>
  )
}