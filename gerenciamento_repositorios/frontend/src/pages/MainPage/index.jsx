import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { Repositories } from "./Repositories";
import { getRepositories } from "../../services/api";
import "./style.css"

const userId = '67e2c569a8baec5c03e837ae'

const MainPage = () => {

  const [repositories, setRepositories] = useState([])

  const loadData = async () => {
    const response = await getRepositories(userId)
    setRepositories(response.data)
  }

  useEffect(() => {
    (async () => await loadData())()
  }, [])

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
      <Repositories repo={repositories} deleteRepo={handleDeleteRepo} onNewRepo={handleNewRepo} />
    </div>
  )
}

export default MainPage