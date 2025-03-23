import React, { useState } from "react";
import './styles.css';


const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('email', email)
    console.log('password', password)
    console.log('Login')
  }

  return (
    <div id="login">
    
      <div className="boxform">
        <h1 className="title">Login</h1>
        <form className="form">

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={ (e) => setEmail(e.target.value) } required />
          </div>

          <div className="field">
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value) } required />
          </div>

          <div className="actions">
            <button onClick={handleLogin}>Entrar</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default LoginPage