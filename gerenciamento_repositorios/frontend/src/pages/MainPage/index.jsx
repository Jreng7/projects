import React from "react";
import "./style.css"

const MainPage = () => {

  const handleLogout = () => {
    console.log('Saindo...')
  }

  return (
    <div className="header">
      <nav>
        <h3>SisRepo</h3>
        <button>Sair</button>
      </nav>
    </div>
  )
}

export default MainPage