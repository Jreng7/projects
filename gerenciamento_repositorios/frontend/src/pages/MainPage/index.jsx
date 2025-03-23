import React from "react";
import "./style.css"

const MainPage = () => {

  const handleLogout = () => {
    console.log('Saindo...')
  }

  return (
    <header>
      <nav>
        <h3>SisRepo</h3>
        <button>Sair</button>
      </nav>
    </header>
  )
}

export default MainPage