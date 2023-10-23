import { useState } from "react";

const DataObj = () => {
  let valor = 10;

  const [outroValor, setOutroValor] = useState(15);

  const [contador, setContador] = useState(0);

  return (
    <div>
      <div>
        <p>O valor = {valor}</p>
        <button onClick={(valor = 15)}>Trocar valor</button>
      </div>
      <div>
        <p>O valor = {outroValor}</p>
        <button onClick={() => setOutroValor(outroValor + 1)}>Troca UseState</button>
      </div>
      <div className="contador">
        <p>O contador está em {contador}</p>
        <button onClick={()=> setContador(contador + 1)}>Contar</button>
      </div>
    </div>
  );
};

export default DataObj;
