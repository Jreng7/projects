import React from "react";
import "./style.css"

const MainPage = () => {

  const handleLogout = () => {
    console.log('Saindo...')
  }

  const handleSearch = (query) => {
    console.log('query' ,query)
  }

  const handleClear = () => {
    console.log('clear')
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
          <button onClick={handleClear}>Limpar</button>
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      <div className="repositories">
        <h2 className="title">Repositórios</h2>
        <ul className="list">
          <li>
            <div className="info">
              <div className="owner">Facebook</div>
              <div className="react">React</div>
            </div>
            <button>Apagar</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainPage