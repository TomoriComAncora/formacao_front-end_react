import './App.css'
// 2 importando componente
import FirstComponents from './components/FirstComponents'
// 4 template expression
import TemplateExpression from './components/TemplateExpression'
// 5 hierarquia de componentes
import Espiao from './components/Espiao'
// 6 eventos
import Event from './components/Event'

function App() {

  return (
    <div className="app">
      {/* 3 comnentário */}
      <h1>Fundamentos React</h1>
      <FirstComponents/>
      <TemplateExpression/>
      <Espiao/>
      <Event/>
    </div>
  )
}

export default App
