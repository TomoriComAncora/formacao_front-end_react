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
import CartaoDoPc from "./components/CartaoDoPc";

// 11 renderização de listas de componentes
const carros = [
  { id: 1, marca: "VK", km: 0, cor: "Preto" },
  { id: 2, marca: "Fored", km: 40000, cor: "Titanio" },
  { id: 3, marca: "Chevrolet", km: 23440, cor: "Amarelo" },
];

const pecas = [
  {
    id: 1,
    processador: "i5",
    memoria: "8gb",
    armazenamento: "1tb",
    placaDeVideo: "1680ti",
  },
  {
    id: 2,
    processador: "Ryzen 55600x",
    memoria: "16gb",
    armazenamento: "512tb",
    placaDeVideo: "2060 super",
  },
  {
    id: 3,
    processador: "i9",
    memoria: "32gb",
    armazenamento: "2tb",
    placaDeVideo: "6600xt",
  },
  {
    id: 4,
    processador: "Ryzen 75700x",
    memoria: "8gb",
    armazenamento: "1tb",
    placaDeVideo: "6500x",
  },
  {
    id: 5,
    processador: "Ryzen 55600g",
    memoria: "32gb",
    armazenamento: "1tb",
    placaDeVideo: "/",
  },
];

// 12 fragments
import Fragments from "./components/Fragments";

// 13 children
import ComponenteChildren from "./components/ComponenteChildren";

// 14 função em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 state lift
import { useState } from "react";
import Mensagem from "./components/Mensagem";
import UsandoMensagem from "./components/UsandoMensagem";
import EscolhaIphone from "./components/EscolhaIphone";
import CoresIphone from "./components/CoresIphone";

function App() {
  const showMessage = () => {
    console.log("Evento teste");
  };

  // 15 state lift
  const [mensagem, setMensagem] = useState("");
  const [cor, setCor] = useState("preto");

  const escolherCor = (cor) => {
    setCor(cor);
  };

  const changeMensagem = (msg) => {
    setMensagem(msg);
  };
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
      {carros.map((carro) => (
        <CartoesDeCarros
          key={carro.id}
          marca={carro.marca}
          km={carro.km}
          cor={carro.cor}
        />
      ))}

      {pecas.map((peca) => (
        <CartaoDoPc
          key={peca.id}
          processador={peca.processador}
          memoria={peca.memoria}
          armazenamento={peca.armazenamento}
          placaDeVideo={peca.placaDeVideo}
        />
      ))}
      {/* 12 fragments */}
      <Fragments />
      {/* 13 children */}
      <ComponenteChildren>
        <div>
          <p>Um filho</p>
          <p>Mais um filho</p>
        </div>
      </ComponenteChildren>
      {/* 14 função em props */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 state lift */}
      <Mensagem msg={mensagem} />
      <UsandoMensagem changeMensagem={changeMensagem} />

      <EscolhaIphone cor={cor}/>
      <CoresIphone escolherCor={escolherCor}/>
    </div>
  );
}

export default App;
