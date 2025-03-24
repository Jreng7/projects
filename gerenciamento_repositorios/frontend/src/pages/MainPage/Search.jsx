import { useState } from 'react'

function Search({ search }) {

  const [query, setQuery] = useState('')
  
  const handleClear = () => {
    setQuery('')
    search('')
  }

  return (
    <>
      <div className="search">
        <label htmlFor="query">Procurar:</label>
        <input type="text" id="query" name="query" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <div className="btn">
          <button onClick={handleClear}>Limpar</button>
          <button onClick={() => search(query)}>Buscar</button>
        </div>
      </div>
    </>
  )
}

export  { Search }