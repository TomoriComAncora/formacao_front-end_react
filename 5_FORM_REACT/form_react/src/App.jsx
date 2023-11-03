import './App.css'
// 1 criando form
import MyForm from './components/MyForm'
function App() {


  return (
      <div className='App'>
        <h1>Form em React</h1>
        {/* 1 criando form */}
        <MyForm userName = "Lucas" userEmail = "lucas@email.com"/>
      </div>
  )
}

export default App
