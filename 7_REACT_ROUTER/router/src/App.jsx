import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <nav>
        <ul>
          <li>Home</li>
          <li>Contato</li>
          <li>Sobre nós</li>
        </ul>
      </nav>
      <Outlet/>
      <footer>
        <h2>Volte sempre</h2>
      </footer>
    </div>
  )
}

export default App
