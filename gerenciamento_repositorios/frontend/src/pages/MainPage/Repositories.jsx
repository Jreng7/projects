import { useState } from 'react'

export function Repositories({ repo, deleteRepo, onNewRepo }){

  const [ newRepo, setNewRepo ] = useState('')

  return (
    <>
       <div className="repositories">
        <h2>Repositórios</h2>

        <ul>
          <li>
            <div>
              <div className="owner">Facebook</div>
              <div className="name">React</div>
            </div>
            <button onClick={() => deleteRepo(null)}>x</button>
          </li>
        </ul>
 
        <div className="search">
          <label htmlFor="repo" className="label-repo">Novo Repositório:</label>
          <input type="url" id="repo" name="repo" value={newRepo} onChange={ (e) => setNewRepo(e.target.value) }/>
          <div className="btn">
            <button onClick={() => onNewRepo(newRepo)}>Adicionar</button>
          </div>
        </div>

      </div>
    </>
  )
}