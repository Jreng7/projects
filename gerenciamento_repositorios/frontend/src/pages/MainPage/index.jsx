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

  const handleDeleteRepo = (repository) => {
    console.log('Deleted', repository)
  }

  const handleNewRepo = (url) => {
    console.log('repo', url)
  }

  return (
    <div className="mainpage">
      <Nav argumento={handleLogout}/>
      <Search search={handleSearch}/>
      <Repositories repo={[]} deleteRepo={handleDeleteRepo} onNewRepo={handleNewRepo} />
    </div>
  )
}

export default MainPage