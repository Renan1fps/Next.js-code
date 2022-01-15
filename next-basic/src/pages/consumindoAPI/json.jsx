import axios from "axios";
import { useState } from "react";


export default function GetUsers() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState('');

  async function getUsers(user) {
    const { data } = await axios.get(`https://api.github.com/users/${user}/repos?`, {
      params: {
        per_page: 10
      }
    })
    if (users) {
      setUser(data)
      console.log(users)
    }else{
      window.location.reload()
    }
  }
  return (
    <div style={{ background: '#222222', height: '100vh', display: 'flex' }}>
      <div style={{
        margin: '2rem auto',
        height: '10rem',
        width: '15rem',
        background: '#464646',
        display: "flex",
        flexDirection: 'column'
      }}>
        <input
          type="text"
          placeholder="digite o nome do user"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => getUsers(name)}>Buscar</button>
      </div>
      <div style={{
        margin: '2rem auto',
        height: '20rem',
        width: '30rem',
        background: '#464646',
        display: "flex",
        flexDirection: 'column'
      }}>
        {users.map((user, i) => (
          <span key={i}>{user.owner.login}</span>
        ))}
      </div>
    </div>
  )
}