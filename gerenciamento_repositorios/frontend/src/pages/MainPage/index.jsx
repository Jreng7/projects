import React from "react";
import { Nav } from "./Nav";
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

  const handleDeleteRepo = () => {
    console.log('Repositório deletado com sucesso!')
  }

  return (
    <div className="mainpage">

      <Nav argumento={handleLogout}/>
      
      <div className="search">
        <label htmlFor="query">Procurar:</label>
        <input type="search" id="query" name="query"/>
        <div className="btn">
          <button onClick={handleClear}>Limpar</button>
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      <div className="repositories">
        <h2>Repositórios</h2>

        <ul>
          <li>
            <p>
              <div className="owner">Facebook</div>
              <div className="name">React</div>
            </p>
            <button onClick={handleDeleteRepo}>x</button>
          </li>

          <li>
            <p>
              <div className="owner">Facebook</div> 
              <div className="name">React</div>
            </p>
            <button>x</button>
          </li>
        </ul>
 
        <div className="search">
          <label htmlFor="repo" className="label-repo">Novo Repositório:</label>
          <input type="url" id="repo" name="repo"/>
          <div className="btn">
            <button onClick={handleSearch}>Adicionar</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainPage