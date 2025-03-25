import React, { useState } from "react";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { Repositories } from "./Repositories";
import { getRepositories } from "../../services/api";
import "./style.css"


const MainPage = () => {

  const userId = '67cc5f58f461d186f397284e'

  const loadData = async (query = '') => {
    const response = await getRepositories(userId)
  }

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