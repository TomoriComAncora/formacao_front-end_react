const Event = () => {
  // 7 Eventos com funções
  const handClick = (e) => {
    console.log(e);
    console.log("Teste!");
  };

  // 8 Função de renderização
  const renderFunction = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderizando aquilo!</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando Evento")}>
          Clique aqui
        </button>
      </div>
      {/* 7 Eventos com funções */}
      <div>
        <button onClick={handClick}>Teste</button>
      </div>

      {/* 8 função de renderização */}
      {renderFunction(true)}
      {renderFunction(false)}
    </div>
  );
};

export default Event;
