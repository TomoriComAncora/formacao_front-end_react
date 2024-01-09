import './App.css'
import { Outlet } from 'react-router-dom'
// 5 link entre páginas
import Navbar from './routes/components/Navbar'
// 9 search parans
import SearchForm from './routes/components/SearchForm'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <SearchForm/>
      <Outlet/>
      <footer>
        <h2>Volte sempre</h2>
      </footer>
    </div>
  )
}

export default App
