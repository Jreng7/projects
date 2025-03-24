import React from "react";
import "./style.css"

const MainPage = () => {

  const handleLogout = () => {
    console.log('Saindo...')
  }

  return (
    <div className="mainpage">
      <header className="header">
        <nav>
          <h3>SisRepo</h3>
          <button onClick={handleLogout} id="btnMain">Sair</button>
        </nav>
      </header>

      <div className="search">
        <label htmlFor="query">Procurar:</label>
        <input type="search" id="query" name="query"/>
        <div className="btn">
          <button>Buscar</button>
          <button>Limpar</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage