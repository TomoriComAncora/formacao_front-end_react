import "./App.css";

// 2 css de componente
import MyComponents from "./components/MyComponents";

// 6 css module
import Title from "./components/Title";

function App() {
  // 4 - css dinâmico inline
  const n = 14;

  // 5 - classe dinâmica
  const redTitle = true;
  return (
    <div className="App">
      {/* 1 css global */}
      <h1>Css no React</h1>
      {/* 2 css de componente */}
      <MyComponents/>
      <p>Teste do css vazado</p>
      {/* 3 inline style */}
      <p style={{color: "#4cb4f8", fontSize: "2rem", padding: "23px"}}>Elemento estilizado inline</p>
      {/* 4 css dinâmico */}
      <h2 style={n > 10 ? {color: "#8e7cc3", fontSize: "3rem"} : {color: "#93c47d", fontSize: "1rem"}}>CSS dinâmico</h2>
      {/* 5 classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe dinâmica</h2>
      {/* 6 css modeule */}
      <Title/>
    </div>
  );
}

export default App;
