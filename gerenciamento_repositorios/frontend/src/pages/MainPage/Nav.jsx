
export function Nav({ argumento }) {
  return (
    <>
      <header className="header">
        <nav>
          <h3>SisRepo</h3>
          <button onClick={argumento} id="btnMain">Sair</button>
        </nav>
      </header>
    </>
  )
}