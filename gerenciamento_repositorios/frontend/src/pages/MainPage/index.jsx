import React from "react";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { Repositories } from "./Repositories";
import "./style.css"

const MainPage = () => {

  const handleLogout = () => {
    console.log('Saindo...')
  }

  const handleSearch = (query) => {
    console.log(query)
  }

  const handleDeleteRepo = () => {
    console.log('Repositório deletado com sucesso!')
  }

  return (
    <div className="mainpage">
      <Nav argumento={handleLogout}/>
      <Search search={handleSearch}/>
      <Repositories />
    </div>
  )
}

export default MainPage