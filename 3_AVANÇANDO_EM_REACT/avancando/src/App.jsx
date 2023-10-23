import "./App.css";

// 2 imagem em assets
import noite from "./assets/night.jpg";

// 3 useState
import DataObj from "./components/DataObj";

// 4 renderização de lista
import ListRender from "./components/ListRender";
function App() {
  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1>Avançando no React</h1>
      {/* 1 img em public */}
      <img src="img.jpg" alt="Imagem da cidade" />
      {/* 2 img em assets */}
      <img src={noite} alt="Imagem da noite" />
      {/* 3 useState */}
      <DataObj />
      {/* 4 renderização de lista */}
      <ListRender/>
    </div>
  );
}

export default App;
