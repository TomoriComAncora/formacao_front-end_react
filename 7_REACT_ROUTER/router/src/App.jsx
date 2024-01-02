import './App.css'
import { Outlet } from 'react-router-dom'
// 5 link entre páginas
import Navbar from './routes/components/Navbar'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <footer>
        <h2>Volte sempre</h2>
      </footer>
    </div>
  )
}

export default App
