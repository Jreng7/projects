import React from "react";
import './styles.css';


const LoginPage = () => {
  return (
    <div id="login">
    
      <div className="boxform">
        <h1 className="title">Login</h1>
        <form className="form">

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="field">
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" />
          </div>

          <div className="actions">
            <button>Entrar</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default LoginPage