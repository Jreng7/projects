import React from "react";

const LoginPage = () => {
  return (
    <div id="login">
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
        
      </form>
    </div>
  )
}

export default LoginPage