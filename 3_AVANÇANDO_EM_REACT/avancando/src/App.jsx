import "./App.css";

// 2 imagem em assets
import noite from "./assets/night.jpg";

// 3 useState
import DataObj from "./components/DataObj";

// 4 renderização de lista
import ListRender from "./components/ListRender";

// 7 renderização condicional
import CondicionalRender from "./components/CondicionalRender";

// 8 props
import ShowUserName from "./components/ShowUserName";

// 9 desestruturando props
import CartoesDeCarros from "./components/CartoesDeCarros";

// 11 renderização de listas de componentes
const carros = [
  { id: 1, marca: "VK", km: 0, cor: "Preto" },
  { id: 2, marca: "Fored", km: 40000, cor: "Titanio" },
  { id: 3, marca: "Chevrolet", km: 23440, cor: "Amarelo" },
];

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
      <ListRender />
      {/* 7 render condicional */}
      <CondicionalRender />
      {/* 8 props */}
      <ShowUserName nome="Lucas" usuario="lfgpaula" />
      {/* 9 desestruturação de props */}
      <CartoesDeCarros marca="VW" km={10000} cor="Preto" />
      {/* 10 reutilizando componentes */}
      <CartoesDeCarros marca="Chevrolet" km={340000} cor="Branco" />
      <CartoesDeCarros marca="Ford" km={4000} cor="Cinza" />
      <CartoesDeCarros marca="Renault" km={14000} cor="vermelho" />
      {/* 11 renderização de lista de componentes */}
      {carros.map((carro)=>(
        <CartoesDeCarros key={carro.id} marca={carro.marca} km={carro.km} cor={carro.cor}/>
      ))}
    </div>
  );
}

export default App;
