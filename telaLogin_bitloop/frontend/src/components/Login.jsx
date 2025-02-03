import { useState } from 'react'

export function Login() {

  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')

  async function handleLogin(e) {
    
    e.preventDefault()

    console.log(email, senha)

  }

  return (
    <div className="login-form-wrap">
      <h2>Login</h2>

      <form action="" className="login-form">
        <input type="email" name="email" placeholder="Email:" required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Senha:" required onChange={(e) => setSenha(e.target.value)}/>
        <button type="submit" className="btn-login" onClick={(e) => {handleLogin(e)}}>
          Entrar
        </button>
      </form>
    </div>
  );
}