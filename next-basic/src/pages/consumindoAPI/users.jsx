import { useState } from 'react'
import style from '../../styles/crudUsers.module.css'

const initialValues = {
  idade: undefined,
  nome: undefined,
}

export default function CrudUsers() {
  const [idade, setIdade] = useState(0);
  const [nome, setNome] = useState('');
  const [usuarios, setUsuarios] = useState(initialValues);

  async function saveUser() {
    const baseURL = 'http://localhost:3001/api/usuarios/user'
    await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify({ idade, nome })
    });

    const response = await fetch(baseURL);
    const usuariosResponse = await response.json();
    console.log(usuariosResponse);
    setUsuarios(usuariosResponse);
  }

  function renderUser() {
    
    return usuarios.map((user, index) => (
      <tr key={index}>
        <td>{user.idade}</td>
        <td>{user.nome}</td>
      </tr>
    ))
  }

  return (
    <div className={style.container}>
      <h1>Criação de Usuários e listagem</h1>
      <div className={style.form}>
        <div>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder='Digite o nome do usuário' />
        </div>
        <div>
          <input
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            type="number"
            placeholder='digite a idade do usuário' />
        </div>
        <button onClick={() => saveUser()} type='button'>Enviar</button>
      </div>
      <div className={style.listagem}>
        Usuáriuos lista
        <table className={style.table}>
          <thead>
            <tr>
              <th>Idade</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {renderUser()}
          </tbody>
        </table>
      </div>
    </div>
  )
}