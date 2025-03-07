import { useState } from 'react'
import axios from 'axios'

export function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const [ user, setUser ] = useState(null)

  const handleLogin = async (e)  => {
    
    e.preventDefault()

    console.log(email, password)

    try {
      const response = await axios.post('http://localhost:3333/login',
        JSON.stringify({email, password}),
        { headers: { 'Content-Type': 'application/json'}}
      )
    } catch (error) {
      if(!error?.response) {
        setError('Erro ao acessar o servidor')
      } else if (error.response.status == 401){
        setError('Usuário ou Senha inválidos')
      }
    }
}

  return (
    <div className="login-form-wrap">
      <h2>Login 2</h2>

      <form action="" className="login-form">
        <input type="email" name="email" placeholder="Email:" required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Senha:" required onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="btn-login" onClick={(e) => {handleLogin(e)}}>
          Entrar
        </button>
        <p>{error}</p>
      </form>
    </div>
  );
}